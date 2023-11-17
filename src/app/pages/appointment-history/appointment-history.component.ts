import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Appointment, AppointmentList } from '@app/modules/data_management/appointment_model';
import { DataManagerService } from '@app/modules/data_management/data_manager';
import { Router } from '@angular/router';


@Component({
  selector: 'app-appointment-history',
  templateUrl: './appointment-history.component.html',
  styleUrls: ['./appointment-history.component.css']
})
export class AppointmentHistoryComponent {


  option_selected_dropdown = "";
  options_dropdown = [ "todas las citas",'citas confimadas' , "citas canceladas",'citas proximas'  ,"citas sin confimar"];
  confirmedAppointments: Appointment[] = [];
  canceledAppointments: Appointment[] = [];
  unconfirmedAppointments: Appointment[] = [];
  futureAppointments: Appointment[] = [];
  endpoint_get_appointments = "citas"
  endpoint_get_appointments_edit = "citas/update"



  appointments?:Appointment[]
  current_appointments_selected?:Appointment[];
  isLoaded = false;

  constructor(private dataManagerService: DataManagerService, private router: Router) {

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
          this.filter_by_status();
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
    }else if(this.option_selected_dropdown == this.options_dropdown[3]){
      this.current_appointments_selected = this.futureAppointments
    }else if(this.option_selected_dropdown == this.options_dropdown[4]){
      this.current_appointments_selected = this.unconfirmedAppointments
    }
  }


  filter_by_status(){
    if(this.appointments != undefined){
      for (const appointment of this.appointments) {
        console.log("ESTADO DE LA CITA ACTUAL EVALUADA: " , appointment.estado_cita_id)
        if (appointment.estado_cita_id === 2) {
          this.confirmedAppointments.push(appointment);
        } else if (appointment.estado_cita_id=== 3) {
          this.canceledAppointments.push(appointment);
        } else if (appointment.estado_cita_id === 1) {
          this.unconfirmedAppointments.push(appointment);
        } else if(this.isFutureDate(appointment.fecha_cita))
          this.futureAppointments.push(appointment)
        }

      }
    }



  /**
   * Filtrar citas futuras
   * @param appointmentDate
   * @returns
   */
  isFutureDate(appointmentDate: string): boolean {
    const appointmentDateObj = new Date(appointmentDate);
    const currentDate = new Date();
    return appointmentDateObj > currentDate;
  }

  /**
   *
   * @param id id de la cita
   */
  redirectTo(id:number) {
    this.router.navigate(["appointment-detail/" + id]);
  }


  create_body_edit(id:number,date:string,message:string,is_confirmed:boolean){
    return {
      "id":id,
      "fecha_cita":date,
      "mensaje":message,
      "estado_cita_id": is_confirmed?2:1
    }
  }


  /**
   *
   * @param is_confirm Si es true la confirma si no la cancela
   */
  to_confirm_appointment(is_confirm:boolean,id:number,date:string,message:string){
      this.dataManagerService.editAppointment(
        this.endpoint_get_appointments_edit,
        this.create_body_edit(id,date,message,is_confirm),
      ).subscribe(response => {
        console.log('Respuesta:', response);
        // Accede al cuerpo de la respuesta
        console.log('Cuerpo de la respuesta:', response); // Esto imprimirá el cuerpo de la respuesta
      },);
  }

}




