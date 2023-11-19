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
    { name: 'Visitas de proyectos y artículos'},
    { name: 'Visitas citas'},
];

selected_report:string 
report_loaded = false

constructor(){
  this.report_loaded = false
}

receiveMessage() {
  console.log("CAMBIOOOO  OOOOO")
}
  ngOnInit(): void {
  }



}
