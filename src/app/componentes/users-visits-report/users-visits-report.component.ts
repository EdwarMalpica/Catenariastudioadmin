import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '@app/services/api/api-service.service';

@Component({
  selector: 'app-users-visits-report',
  templateUrl: './users-visits-report.component.html',
  styleUrls: ['./users-visits-report.component.css']
})
export class UsersVisitsReportComponent {
  basicData: any;
  basicOptions: any;
  ApiUrl;
  registries_users_data:any
  loaded = false
  months = []
  values_months = []
  max_users_month = 0
  total_registries = 0
  

  constructor(private api: ApiServiceService, private route: Router){
    this.load_data()
  }


  load_data(){
    this.ApiUrl = this.api.apiUrl;
    this.api.get('/logs/users').subscribe((data) =>{
      this.registries_users_data = data['visitToThePageForLast12Month'];
      console.log(data)
      this.set_months();
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

  

}
