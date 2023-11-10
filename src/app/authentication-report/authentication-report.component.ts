import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-authentication-report',
  templateUrl: './authentication-report.component.html',
  styleUrls: ['./authentication-report.component.css']
})
export class AuthenticationReportComponent implements OnInit  {

  totalAutenticaciones: number;

  //Cómo lo conecto (mapeo) con los datos de la base de datos?
  data = [
    { name: 'Fecha 1', value: 10 },
    { name: 'Fecha 2', value: 15 },
    { name: 'Fecha 3', value: 20 },

    // Agrega más datos según tus necesidades
  ];


  constructor(private authService: AuthenticationService) {}

  ngOnInit(): void {
    this.authService.getNumberOfAuthentications(1).subscribe(data => {
      // console.log(data);
      this.data=[];
      for (let i = 0; i < data.totalAutenticaciones.length; i++) {
        this.data.push({
          name: data.totalAutenticaciones[i].year + '' + data.totalAutenticaciones[i].month,
          value:data.totalAutenticaciones[i].count

        });
      }
    });

  }
}
