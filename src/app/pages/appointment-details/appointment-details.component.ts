import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment } from 'src/app/data_management/appointment_model';


@Component({
  selector: 'app-appointment-details',
  templateUrl: './appointment-details.component.html',
  styleUrls: ['./appointment-details.component.css']
})
export class AppointmentDetailsComponent {

  appointment = new Appointment();

  constructor(private router: Router) { }

  redirectToRoute() {
    this.router.navigate(["/appointment"]);  // Reemplaza 'ruta-deseada' con la ruta a la que deseas redirigir
  }
  
}
