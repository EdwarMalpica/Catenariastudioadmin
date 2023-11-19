import { Component } from '@angular/core';
import { Appointment } from '@app/modules/data_management/appointment_model';
import { Router } from '@angular/router';
import { ApiService } from '@app/core/services/api.service';
import { URL_API_GET_APOINTMENTS } from '@app/data/constants/constants';
import { AlertsService } from '@app/shared/services/alerts.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '@app/data/app.state';
import { getIsLoading, getIsLoadingButton } from '@app/data/shared/shared.selector';
import { isLoading, isLoadingButton } from '@app/data/shared/shared.action';


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
  isLoadding:Observable<boolean>;
  appointments:any[] = [];
  current_appointments_selected?:Appointment[];
  isLoaded = false;

  constructor(
    private api:ApiService,
    private router: Router,
    private alerts:AlertsService,
    private store:Store<AppState>) {

  }


  ngOnInit(): void {

    this.isLoadding = this.store.select(getIsLoadingButton);
    this.store.dispatch(isLoading({isLoading:true}));
    this.getApointments();
  }

  getApointments(){
     try {
       this.api.get(URL_API_GET_APOINTMENTS).subscribe((report: any) => {
         this.appointments = report.citas;
         this.current_appointments_selected = this.appointments;
         this.isLoaded = true;
         this.filter_by_status();
         this.store.dispatch(isLoading({ isLoading: false }));
       });
     } catch (error) {
       this.alerts.showError(error.error.message);
       this.store.dispatch(isLoading({ isLoading: false }));
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
  changeState(is_confirm:boolean,id:number,date:string,message:string){
    this.store.dispatch(isLoadingButton({ isLoadingButton: true }));
      this.api.post('citas/update',{
        id:id,
        fecha_cita:date,
        mensaje:message,
        estado_cita_id: is_confirm?2:3
      }).subscribe({
        next: data => {
          this.alerts.showSuccess("Cita actualizada correctamente");
          this.store.dispatch(isLoadingButton({ isLoadingButton: false }));
          this.getApointments();
        },
        error: error => {
          this.store.dispatch(isLoadingButton({ isLoadingButton: false }));
          this.alerts.showError(error.error.message);
        }
      })
  }

}




