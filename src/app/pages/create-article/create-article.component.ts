import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServiceService } from '@app/services/api/api-service.service';
@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent {
  titulo;
  fecha_creacion;
  descripcion;
  user_id;
  contenido;
  miniatura;
  model;
  img: any[] = [];
  formulario: FormGroup;

  constructor(private api: ApiServiceService, private fb: FormBuilder, private router:Router) {
    this.formulario = this.fb.group({
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required],
      contenido: ['', Validators.required],
    });
  }

  uploadFileImg(event) {
    for (let file of event.files) {
      this.img.push(file);
    }
    
  }

  uploadFileMiniatura(event) {
    this.miniatura = event.files[0];
  }
  uploadFileModel(event) {
    this.model = event.files[0];
  }

  createProject() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    const data = {
        titulo: this.formulario.get('titulo').value,
        fecha_creacion: formattedDate,
        descripcion: this.formulario.get('descripcion').value,
        user_id: 1,
        contenido: this.formulario.get('contenido').value,
    }
    const formData = new FormData();
    formData.append('data', JSON.stringify(data));
    for (let i = 0; i < this.img.length; i++) {
      formData.append('img'+i, this.img[i]);
    }
    formData.append('miniatura', this.miniatura);
    formData.append('model', this.model);

     this.api.postFile('/proyectos/create', formData).subscribe( //CAMBIAR RUTA A LA API
      (data) => {
        alert('Artículo creado correctamente');
        this.router.navigate(['/article-catalog']);
      },
      (error) => {
        alert('Error al crear el proyecto');
      },
      () => {
        console.log('Peticion finalizada');
      }
    );
  }
}
