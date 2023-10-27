import { Component } from '@angular/core';

@Component({
  selector: 'app-projects-catalog',
  templateUrl: './projects-catalog.component.html',
  styleUrls: ['./projects-catalog.component.css']
})
export class ProjectsCatalogComponent {


project = new Project("Casas bonitas","03/07/2023","Projecto sobre casas de residencia para familias grandes","Conjunto residencial")
project_list = [this.project,this.project,this.project,this.project,this.project,this.project,this.project]

option_selected_dropdown = "";
options_dropdown = ["Proyecto residencial", "Proyecto comercial", "Proyecto industrial", "Proyecto educativo", "Proyecto de salud", "Proyecto de entretenimiento", "Proyecto de restauración", "Proyecto de transporte", "Proyecto de urbanismo", "Proyecto sostenible"];


receiveMessage($event: string) {
  this.option_selected_dropdown = $event;
}
redirectTo(){

}

}







export class Project{

  name:string
  fecha_proyecto:string
  description:string
  type:string
  images:string[]

  constructor(name,fecha_proyecto,description,type){
    this.name = name
    this.fecha_proyecto = fecha_proyecto
    this.description = description
    this.type = type
  }

  set_images(url){
    this.images.push(url)
  }


}
