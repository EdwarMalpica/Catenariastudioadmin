import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Appointment, AppointmentList } from 'src/app/data_management/appointment_model';
import { DataManagerService } from 'src/app/data_management/data_manager';
import { Router } from '@angular/router';


@Component({
  selector: 'app-appointment-history',
  templateUrl: './appointment-history.component.html',
  styleUrls: ['./appointment-history.component.css']
})
export class AppointmentHistoryComponent {


  option_selected_dropdown = "";
  options_dropdown = ['citas proximas' , 'citas confimadas' , "citas canceladas"];
  confirmedAppointments: Appointment[] = [];
  canceledAppointments: Appointment[] = [];
  unconfirmedAppointments: Appointment[] = [];
  endpoint_get_appointments = "citas"
  
  
 
  appointments?:Appointment[] 
  current_appointments_selected?:Appointment[];
  isLoaded = false;

  constructor(private dataManagerService: DataManagerService, private router: Router) {
    this.filter_by_status();
  }
  

  ngOnInit(): void {
    try {
      this.dataManagerService
        .getAppontensBy(this.endpoint_get_appointments)
        .subscribe((report) => {
          let data:AppointmentList = report;
          this.appointments = data.citas;
          this.current_appointments_selected = this.appointments
          this.isLoaded = true;
        });      
    } catch (error) {
      
    }
  }

  receiveMessage($event: string) {
    this.option_selected_dropdown = $event;
    if(this.option_selected_dropdown == this.options_dropdown[0]){
      this.current_appointments_selected = this.appointments
    }else if(this.option_selected_dropdown == this.options_dropdown[1]){
      this.current_appointments_selected = this.confirmedAppointments
    }else if(this.option_selected_dropdown == this.options_dropdown[2]){
      this.current_appointments_selected = this.canceledAppointments
    }
  }


  filter_by_status(){
    if(this.appointments != undefined){
      for (const appointment of this.appointments) {
        if (appointment.estado_cita_id === 2) {
          this.confirmedAppointments.push(appointment);
        } else if (appointment.estado_cita_id=== 3) {
          this.canceledAppointments.push(appointment);
        } else if (appointment.estado_cita_id === 2) {
          this.unconfirmedAppointments.push(appointment);
        }
      }
      console.log("Ya se ejecuto, se obtuvo lo siguiente: " , this.confirmedAppointments);

    }
  }

  /**
   * 
   * @param id id de la cita 
   */
  redirectTo(id:number) {
    this.router.navigate(["appointment-detail/" + id]);
  }

}




