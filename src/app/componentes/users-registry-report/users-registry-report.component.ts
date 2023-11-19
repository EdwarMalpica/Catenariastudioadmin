import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '@app/services/api/api-service.service';

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
  

  constructor(private api: ApiServiceService, private route: Router){
    this.load_data()
  }


  load_data(){
    this.ApiUrl = this.api.apiUrl;
    this.api.get('/logs/users').subscribe((data) =>{
      this.registries_users_data = data['registerUsersForLast12Month'];
      console.log(this.registries_users_data)
      this.set_months();
      this.indicesNumerosMinimos()
      this.set_properties_chart()
      this.loaded = true
    }, (error) => {
      console.log(error);
    }, () => {
      console.log('Peticion finalizada');
    });
  }

  set_properties_chart(){
    this.basicData = {
        labels: this.months,
        datasets: [
            {
                label: 'Publicaciones en meses',
                data: this.values_months,
                fill: false,
                borderColor: '#42A5F5',
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
  
    for (let i = 1; i < array.length; i++) {
      const elementoActual = array[i];
  
      if (elementoActual < minimo) {
        // Nuevo mínimo encontrado, reiniciar el array de índices
        minimo = elementoActual;
        this.minim_months.push(this.months[i])
        indicesMinimos = [i];
      } else if (elementoActual === minimo) {
        // Mismo mínimo encontrado, agregar el índice al array
        indicesMinimos.push(i);
      }
      // Si el elemento actual es mayor, no hacemos nada y continuamos con el siguiente elemento.
    }
  
    return indicesMinimos;
  }
}
