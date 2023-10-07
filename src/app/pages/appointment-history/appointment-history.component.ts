import { Component } from '@angular/core';

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
  
  
  appointments = [new Appointment("Juan Gonzales","28-07-23","U","mail@gmail.com","Estly interesado en el nuevo proyect"),
  new Appointment("Gabriela Quevedo","28-07-23","CO","mail@gmail.com","Estly interesado en el nuevo proyect"),
  new Appointment("Laura Casas","28-07-23","CA","mail@gmail.com","Estly interesado en el nuevo proyect"),
  new Appointment("Esteban Malpica","28-07-23","CO","mail@gmail.com","Estly interesado en el nuevo proyect"),]
  
  current_appointments_selected:Appointment[] = this.appointments;

  constructor(){
    this.filter_by_status();
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
    for (const appointment of this.appointments) {
      if (appointment.status === 'CO') {
        this.confirmedAppointments.push(appointment);
      } else if (appointment.status=== 'CA') {
        this.canceledAppointments.push(appointment);
      } else if (appointment.status === 'U') {
        this.unconfirmedAppointments.push(appointment);
      }
    }
    console.log("Ya se ejecuto, se obtuvo lo siguiente: " , this.confirmedAppointments);
  }

}



export class Appointment{

  name:string = "";
  date:string = "";
  state:boolean = false;
  is_confirmed =  false;
  mail =  "";
  message =  "";
  status = "";

  constructor(name:string,date:string,state:string,mail:string,message:string){
      this.name = name;
      this.date = date;
      this.status = state;
      this.state = this.set_state(state)//VA A TENER 3 VALORES CO ( CONFIRMED ) CA (CANCELED) O U (UNCONFIRMED OR UNCANCELED)
      this.is_confirmed = this.set_is_confirmed(state)
      this.message = message
      this.mail = mail
  }

  set_state(state:string) {
    return state != "U" ? true : false;
  }

  set_is_confirmed(state:string){
    return state == "CO" ? true : false;
  }


  
}
