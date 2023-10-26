import { Component } from '@angular/core';

@Component({
  selector: 'app-projects-catalog',
  templateUrl: './projects-catalog.component.html',
  styleUrls: ['./projects-catalog.component.css']
})
export class ProjectsCatalogComponent {


project:Project
project_list:Project[]


}

export class Project{

  name:string
  fecha_proyecto:string

  redirectTo(){

  }

}
