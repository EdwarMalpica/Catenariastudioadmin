import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  option_reports= [
    { name: 'Tipos de proyectos'},
    { name: 'Creación proyectos'},
    { name: 'Registros usuarios'},
    { name: 'Visitas de usuarios'},
];

selected_report:string 

constructor(){
}
  ngOnInit(): void {
  }



}
