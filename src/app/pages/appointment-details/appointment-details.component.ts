import { Component } from '@angular/core';
import { Appointent } from '../appointment-history/appointment-history.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-appointment-details',
  templateUrl: './appointment-details.component.html',
  styleUrls: ['./appointment-details.component.css']
})
export class AppointmentDetailsComponent {

  appointment = new Appointent("Juan Gonzalez","28-07-23","U","mail@gmail.com","Estly interesado en el nuevo proyect");

  constructor(private router: Router) { }

  redirectToRoute() {
    this.router.navigate(["/appointment"]);  // Reemplaza 'ruta-deseada' con la ruta a la que deseas redirigir
  }
  
}
