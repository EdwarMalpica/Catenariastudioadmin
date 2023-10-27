import { User } from "./user"

export class Appointment {
  'id'!: number;
  'fecha_cita'!: string;
  'mensaje'!: string;
  'user_id'!: number;
  'estado_cita_id': number;
  'user'!: User;

  state: boolean = false;
  is_confirmed = false;

  get_state() {
    return this.estado_cita_id != 1 ? true : false; // 1 es estado sin confirmar
  }

  get_is_confirmed() {
    return this.estado_cita_id == 2 ? true : false; // 2 es estado de confirmada
  }
}


export class AppointmentList{

    status !: string
    citas !: Appointment[]

}
