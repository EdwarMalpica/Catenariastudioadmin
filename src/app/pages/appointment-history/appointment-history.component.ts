import { Component } from '@angular/core';

@Component({
  selector: 'app-appointment-history',
  templateUrl: './appointment-history.component.html',
  styleUrls: ['./appointment-history.component.css']
})
export class AppointmentHistoryComponent {

  options_dropdown = ['citas proximas' , 'citas confimadas' , "citas canceladas"];

  appointments = [new Appointent("Juan Gonzales","28-07-23","U","mail@gmail.com","Estly interesado en el nuevo proyect"),
  new Appointent("Gabriela Quevedo","28-07-23","CO","mail@gmail.com","Estly interesado en el nuevo proyect"),
  new Appointent("Laura Casas","28-07-23","CA","mail@gmail.com","Estly interesado en el nuevo proyect"),
  new Appointent("Esteban Malpica","28-07-23","CO","mail@gmail.com","Estly interesado en el nuevo proyect"),

]


}

export class Appointent{

  name:string = "";
  date:string = "";
  state:boolean = false;
  is_confirmed =  false;
  mail =  "";
  message =  "";

  constructor(name:string,date:string,state:string,mail:string,message:string){
      this.name = name;
      this.date = date;
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
