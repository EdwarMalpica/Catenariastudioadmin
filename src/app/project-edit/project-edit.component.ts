import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';


import { HttpClient } from '@angular/common/http';
import { ProjectService } from '@app/services/project.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css'],


})
export class ProjectEditComponent implements OnInit{


  proyecto: any = {};
  modelo3DLoaded = false;
  gltf: any;
  selectedValue: string = '';
  projectId: number;
  model3DFile: File;


  constructor(private projectService: ProjectService,private route: ActivatedRoute) {


    this.proyecto = {tipoProyecto: null};
   }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      if(params.get('id') != null){
      this.projectId = Number(params.get('id'));
      console.log(this.projectId);
      if(this.projectId){
        this.loadProject(this.projectId);
      }
      }
    });

  }

  private loadProject(projectId: number){
    this.proyecto={
      id: 1,
      titulo: "proyecto",
      descripcion: "este es un proyecto",
      imagenes: ["Imagen1.jpg"],
      modelos: [],
      tipoProyecto: "Diseño de Edificios"
    };
    this.projectService.getProject(projectId).subscribe((result)=>{
      // this.proyecto = result;
    }
    );
  }


  //  Three.js para cargar el modelo 3D cuando el usuario selecciona un archivo
  onModelo3DSelected(event: any) {
    const loader = new GLTFLoader();
    const file = event.target.files[0];
    // Pruebas:
    this.model3DFile = file;
    //Fin de pruebas
    if (file) {
      loader.load(URL.createObjectURL(file), (gltf) => {
        console.log('Modelo 3D cargado:', gltf);
        this.modelo3DLoaded = true;
        this.model3DFile = file;
      });
    }
  }

  guardarProyecto() {
    console.log(this.proyecto);
    if (!this.modelo3DLoaded) {
      alert('Por favor, carga un modelo 3D antes de guardar.');
    } else {
      // objeto que contenga los datos del proyecto y el modelo 3D
      const data = {
        proyecto: this.proyecto,
        modelo3D: this.gltf  // aquí agrego el objeto del modelo 3D cargado
      };

      this.projectService.updateProject(data).subscribe((result)=>{
        console.log(result);
      });


    }
  }

  deleteImage(imageId: String){
    for (let i = 0; i < this.proyecto.imagenes.length; i++) {

      if(this.proyecto.imagenes[i]==imageId){
        this.proyecto.imagenes.splice(i, 1);
        return;
      }

    }

  }

  openModelFileInput(){
    document.getElementById("modelFileInput").click();
  }

  openImageFileInput(){
    document.getElementById("imageFileInput").click();

  }
}
