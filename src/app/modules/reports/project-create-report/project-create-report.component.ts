import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ApiService } from '@app/core/services/api.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-project-create-report',
  templateUrl: './project-create-report.component.html',
  styleUrls: ['./project-create-report.component.css']
})
export class ProjectCreateReportComponent {

  basicData: any;
  basicOptions: any;
  report_type_projects:Object = {}
  sorted_type_projects:Object = {}
  top_element_key:string
  top_element_values:number
  button_element_key:string
  button_element_values:number
  total_project = 0
  proyectos = [];
  ApiUrl;
  loaded = false
  @Output() messageEvent = new EventEmitter<boolean>();




  constructor(private api: ApiService, private route: Router) {
    this.load_data();
  }


  ngOnInit(): void {

  }

  load_data(){
    this.api.get('proyectos').subscribe((data) =>{
      this.proyectos = data['proyectos'];
      this.loaded = true
      this.get_number_publication();
      this.set_chart_properties();
      this.sort_data()

    }, (error) => {
      console.log(error);
    }, () => {
      console.log('Peticion finalizada');
    });
  }
  get_types_projects(types_registered: string[]): string[] {
    const aux: string[] = Array.from(new Set(types_registered));
    return aux;
  }

  /**
   *
   * @returns tipos de publicaciones regisradps
   */
  get_number_publication(){
    this.report_type_projects = {
    }
    this.proyectos.forEach(current_project => {
      if(current_project["tipo_publicacion_id"] in this.report_type_projects){
        this.report_type_projects[current_project["tipo_publicacion_id"]] += 1
      }else{
        this.report_type_projects[current_project["tipo_publicacion_id"]] = 1
      }

    });
  }

  sort_data(){
    const entriesArray: [string, number][] = Object.entries(this.report_type_projects);
    const sortedArray = entriesArray.sort((a, b) => b[1] - a[1]);
    const sortedObject: Record<string, number> = Object.fromEntries(sortedArray);
    this.top_element_key = Object.keys(sortedObject)[0]
    this.top_element_values = Object.values(sortedObject)[0]
    this.button_element_key  = Object.keys(sortedObject)[sortedArray.length - 1]
    this.button_element_values  = Object.values(sortedObject)[sortedArray.length - 1]
    this.total_project = Object.values(this.report_type_projects).reduce((acumulador, valorActual) => acumulador + valorActual, 0);

  }





  set_chart_properties(){

    this.basicData = {
      labels: Object.keys(this.report_type_projects),
      datasets: [
          {
              label: 'Tipos de proyectos',
              data:   Object.values(this.report_type_projects),
              backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
              borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
              borderWidth: 1
          }
      ]
  };

  this.basicOptions = {
      plugins: {
          legend: {
              labels: {
              }
          }
      },
      scales: {
          y: {
              beginAtZero: true,
              ticks: {
              },
              grid: {
                  drawBorder: false
              }
          },
          x: {
              ticks: {
              },
              grid: {
                  drawBorder: false
              }
          }
      }
  };
  }





}
