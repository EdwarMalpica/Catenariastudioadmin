import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ApiService } from '@app/core/services/api.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-appointments-visits-report',
  templateUrl: './appointments-visits-report.component.html',
  styleUrls: ['./appointments-visits-report.component.css']
})
export class AppointmentsVisitsReportComponent {


  data: any;
  options: any;
  report_type_projects:Object = {}
  sorted_type_projects:Object = {}
  top_element_key:string
  top_element_values:number
  button_element_key:string
  button_element_values:number
  total_appointment = 0
  appointment_data = [];
  ApiUrl;
  loaded = false
  months = []
  values_months = []
  minim_months = []
  minim_value = 0
  max_months = []
  max_value = 0
  @Output() messageEvent = new EventEmitter<boolean>();

  

  constructor(private api: ApiService, private route: Router) {
    this.messageEvent.emit(true);
    this.set_months()
    this.load_data();
  }


  ngOnInit(): void {

  }
  
  load_data(){
    this.api.get('/logs/citas').subscribe((data) =>{
      console.log("data " , data)
      this.appointment_data = data['citasForLast12Month'];
      this.total_appointment = data["visitToAllCitas"]
      this.set_months()
      this.indicesNumerosMinimos()
      this.found_max_months()
      this.set_chart_properties()
      
      this.loaded = true
    }, (error) => {
      console.log(error);
    }, () => {
      console.log('Peticion finalizada');
    });
  }

  set_months(){
    this.appointment_data.forEach(currentObject=> {
      this.months.push(currentObject['mes'])
      this.values_months.push(currentObject['valor'])
    });
    const maxNumber: number = Math.max(...this.values_months);
  }
  

  set_chart_properties(){
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
    
    this.data = {
        datasets: [
            {
                data: this.values_months,
                backgroundColor: [
                    documentStyle.getPropertyValue('--red-500'),
                    documentStyle.getPropertyValue('--green-500'),
                    documentStyle.getPropertyValue('--yellow-500'),
                    documentStyle.getPropertyValue('--bluegray-500'),
                    documentStyle.getPropertyValue('--blue-500'),
                    documentStyle.getPropertyValue('--orange-500'),
                    documentStyle.getPropertyValue('--purple-500'),
                    documentStyle.getPropertyValue('--gray-500'),
                    documentStyle.getPropertyValue('--black-500'),
                    documentStyle.getPropertyValue('--teal-500'),
                    documentStyle.getPropertyValue('--pink-500'),
                    documentStyle.getPropertyValue('--indigo-500'),
                    documentStyle.getPropertyValue('--amber-800')
                ],
                label: 'My dataset'
            }
        ],
        labels: this.months
    };
    
    this.options = {
        plugins: {
            legend: {
                labels: {
                    color: textColor
                }
            }
        },
        scales: {
            r: {
                grid: {
                    color: surfaceBorder
                }
            }
        }
    };
  }

  indicesNumerosMinimos(){
    let array = this.values_months
    let minimo = array[0];
    let indicesMinimos: number[] = [0];
  
    for (let i = 0; i < array.length; i++) {
      const elementoActual = array[i];
      if (elementoActual <= minimo) {
        this.minim_value = minimo
        minimo = elementoActual;
        this.minim_months.push(this.months[i])
        indicesMinimos = [i];
      } 
    }
  }

  found_max_months(){
    let array = this.values_months  
    for (let i = 0; i < array.length; i++) {
      const current_number = array[i];
      console.log("Actual valor:  " ,current_number)
      if (current_number > this.max_value) {
        this.max_value = current_number;
        this.max_months.push(this.months[i])
      } 
    }
  }

}
