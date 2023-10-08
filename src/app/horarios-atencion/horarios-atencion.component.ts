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
      // // { dia: 'lunes', hora_inicio: '08:00 AM', inicio: '09:00 AM', hora: '10:00 AM' , habilitado: true },
      // { habilitado: true, dia: 'lunes', horas: this. generarFranjasHorarias(), horaInicio: '08:00 AM', horaFin: '04:00 PM'  },
      // { habilitado: true, dia: 'martes', horas: this. generarFranjasHorarias(), horaInicio: '08:00 AM', horaFin: '04:00 PM'  },
      // { habilitado: true, dia: 'miércoles', horas: this. generarFranjasHorarias(), horaInicio: '08:00 AM', horaFin: '04:00 PM' },
      // { habilitado: true,dia: 'jueves', horas: this. generarFranjasHorarias(), horaInicio: '08:00 AM', horaFin: '04:00 PM'},
      // { habilitado: true,dia: 'viernes', horas: this. generarFranjasHorarias(), horaInicio: '08:00 AM', horaFin: '04:00 PM' },
      // { habilitado: true,dia: 'sábado', horas: this. generarFranjasHorarias(), horaInicio: '08:00 AM', horaFin: '04:00 PM' },
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



  generarHoras(): string[] {
    const horas = [];
    const horaInicial = 8; // Hora de inicio
    const horaFinal = 15; // Hora de finalización

    for (let hora = horaInicial; hora <= horaFinal; hora++) {
      for (let minuto = 0; minuto < 60; minuto += 30) {
        // Evita las horas 12:30 PM, 1:00 PM y 1:30 PM
      if (!(hora === 12 && minuto === 30) && !(hora === 13 && (minuto === 0 || minuto === 30))) {
        const horaFormateada = `${hora.toString().padStart(2, '0')}:${minuto.toString().padStart(2, '0')}`;
        horas.push(horaFormateada);
      }
    }
    }

    return horas;
  }



  generarFranjasHorarias(): string[] {
    const franjas = [];
    const horaInicial = 8; // Hora de inicio
    const horaFinal = 15; // Hora de finalización

    for (let hora = horaInicial; hora <= horaFinal; hora++) {
      const inicio = `${hora.toString().padStart(2, '0')}:00 `;
      const fin = `${(hora + 1).toString().padStart(2, '0')}:00 `;

      franjas.push(`${inicio} - ${fin}`);
    }

    return franjas;
  }



  toggleControls() {
    this.disableControls = !this.disableControls;
  }


  redirigirAEdicion(horario: any) {
  // Reemplaza 'tu-vista-de-edicion' con la ruta correcta a tu vista de edición
  this.router.navigate(['/tu-vista-de-edicion'], { state: { horario } });
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
