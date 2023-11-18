import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  option_reports= [
    { name: 'Tipos de proyectos'},
    { name: 'Creación publicaciones'},
];

selected_report:string

constructor(){
  console.log(this.selected_report)
}
  ngOnInit(): void {
    console.log(this.selected_report)
  }



}
