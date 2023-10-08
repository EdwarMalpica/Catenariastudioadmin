import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HorariosService } from '@app/services/horarios.service';
import { HorariosResponse } from '@app/models/dtos/horarios-response.interface';



@Component({
  selector: 'app-horarios-atencion',
  templateUrl: './horarios-atencion.component.html',
  styleUrls: ['./horarios-atencion.component.scss']
})
export class HorariosAtencionComponent {

  //Var a usar en los métodos: --> manejo los horarios
  horarios: any[];
  horarioEditado: any
  //
  horaInicio: string | null = null;
  horaFin: string | null = null;
  //
  horariosToGuardar: any[] = [];
  // Variable para deshabilitar los controles
  disableControls = true;
  //Para el botón de editar
  horarioAEditar: any | null = null;



  constructor(private router: Router, private horariosService: HorariosService) {
    // Definición de horarios:
    this.horarios = [

    ];
    this.loadSchedules();
  }


  agregarHora(horario: any) {
    // Obtiene la última hora en el arreglo de horas
    const ultimaHora = horario.horas[horario.horas.length - 1];
    // Calcula la siguiente hora
    const horaActual = this.siguienteHora(ultimaHora);
    // Agrega la hora actual al arreglo de horas
    if (horaActual !== null) {
      horario.horas.push(horaActual);
      // Actualiza la hora de fin cuando se agrega una nueva hora
      horario.horaFin = horaActual;
    }
  }


  siguienteHora(hora: string): string | null {
    if (!hora) {
      // Si no hay hora previa, regresa la primera hora
      return '08:00 AM'; // Horario inicio?????
    }
    // Convierte la hora en formato HH:MM AM/PM a un objeto Date
    const horaDate = new Date(`2000-01-01 ${hora}`);
    // Aumento del intervalo añadiendo 30 minutos a la hora actual --¿Preguntar horas de atención????????
    horaDate.setMinutes(horaDate.getMinutes() + 30);
    // Formatea la nueva hora
    const horaActual = horaDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    // Si la hora actual es posterior a las ?:00 PM, no se agrega más --> preguntar horario de atención ???
    if (horaActual > '07:00 PM') {
      return null;
    }
    return horaActual;
  }

  redirigirAEdicion(horario: any) {
  this.router.navigate(['/editar-horarios'], { state: { horario } });
}

private loadSchedules(): void{
  this.horariosService.getSchedule().subscribe(
    (schedules: HorariosResponse)=>{
      console.log(schedules);
      this.horarios=schedules.horarios;
    }
  );


}

}
