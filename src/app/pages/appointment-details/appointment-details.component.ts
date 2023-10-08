import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment, AppointmentList } from 'src/app/data_management/appointment_model';
import { DataManagerService } from 'src/app/data_management/data_manager';


@Component({
  selector: 'app-appointment-details',
  templateUrl: './appointment-details.component.html',
  styleUrls: ['./appointment-details.component.css']
})
export class AppointmentDetailsComponent {


  constructor(private router: Router,private dataManagerService: DataManagerService,private route: ActivatedRoute) {


    
   }

  appointments?:Appointment[] 
  appointment?:Appointment|undefined
  isLoaded = false;
  endpoint_get_appointments = "citas";
  appointment_selected_id ?:any

  ngOnInit(): void {
    try {
      this.route.paramMap.subscribe(params => {
        if(params.get('id') != null){
        this.appointment_selected_id = params.get('id'); 
        }
      });
      this.dataManagerService
        .getAppontensBy(this.endpoint_get_appointments)
        .subscribe((report) => {
          let data:AppointmentList = report;
          this.appointments = data.citas;
          this.isLoaded = true;
          this.setAppointmentById(this.appointment_selected_id)
        });      
        
      } catch (error) {
        
      }
  }

  setAppointmentById(id: string) {
      let id_to_search:Number = parseInt(id)
      if(this.appointments != undefined){
        for (const appointment of this.appointments) {
          if (appointment.id === id_to_search) {
            this.appointment = appointment;
          }
        }
    }
  }
  

  redirectToRoute() {
    this.router.navigate(["/appointment"]);  // Reemplaza 'ruta-deseada' con la ruta a la que deseas redirigir
  }
  
}
