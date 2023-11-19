import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '@app/core/services/api.service';

@Component({
  selector: 'app-users-registry-report',
  templateUrl: './users-registry-report.component.html',
  styleUrls: ['./users-registry-report.component.css']
})
export class UsersRegistryReportComponent {

  basicData: any;
  basicOptions: any;
  ApiUrl;
  registries_users_data:any
  loaded = false
  months = []
  values_months = []
  max_users_month = 0
  total_registries = 0
  minim_months = []
  max_months = []
  max_value = 0
  @Output() messageEvent = new EventEmitter<boolean>();


  constructor(private api: ApiService, private route: Router){
    this.messageEvent.emit(true);
    this.load_data()
  }


  load_data(){
    this.api.get('logs/users').subscribe((data) =>{
      console.log(data)
      this.registries_users_data = data['registerUsersForLast12Month'];
      this.set_months();
      this.indicesNumerosMinimos()
      this.found_max_months()
      this.set_properties_chart()
      this.loaded = true
    }, (error) => {
      console.log(error);
    }, () => {
      console.log('Peticion finalizada');
    });
  }

  set_properties_chart(){
    const documentStyle = getComputedStyle(document.documentElement);
    this.basicData = {
        labels: this.months,
        datasets: [
            {
                label: 'Publicaciones en meses',
                data: this.values_months,
                fill: false,
                borderColor: documentStyle.getPropertyValue('--green-500'),
                tension: .4
            }]}
  }

  set_months(){
    this.registries_users_data.forEach(currentObject=> {
      this.months.push(currentObject['mes'])
      this.values_months.push(currentObject['valor'])
      this.total_registries += currentObject['valor']
    });
    const maxNumber: number = Math.max(...this.values_months);
  }

  indicesNumerosMinimos(): number[] {
    let array = this.values_months
    let minimo = array[0];
    let indicesMinimos: number[] = [0];

    for (let i = 0; i < array.length; i++) {
      const elementoActual = array[i];
      if (elementoActual <= minimo) {
        minimo = elementoActual;
        this.minim_months.push(this.months[i])
        indicesMinimos = [i];
      }
    }
    return indicesMinimos;
  }

  found_max_months(){
    let array = this.values_months
    let max_indices: number[] = [0];
    for (let i = 0; i < array.length; i++) {
      const current_number = array[i];
      if (current_number >= this.max_value) {
        this.max_value = current_number;
        this.max_months.push(this.months[i])
      }
    }
  }
}
