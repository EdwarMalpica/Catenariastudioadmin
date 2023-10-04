import { Component } from '@angular/core';

@Component({
  selector: 'app-editar-horarios',
  templateUrl: './editar-horarios.component.html',
  styleUrls: ['./editar-horarios.component.scss']
})
export class EditarHorariosComponent {

  //Var a usar en los métodos: --> manejo los horarios
  horarios: any[];
  horarioEditado: any
  horaInicio: string | null = null;
  horaFin: string | null = null;
  //
  horariosToGuardar: any[] = [];


  constructor() {
    // Definición de horarios:
    this.horarios = [
      // { dia: 'lunes', hora_inicio: '08:00 AM', inicio: '09:00 AM', hora: '10:00 AM' , habilitado: true },
      { habilitado: true, dia: 'lunes', horas: this.generarHoras() },
      { dia: 'martes', horas: [], hora: '10:00 AM', habilitado: true },
      { dia: 'miércoles', horas: [], habilitado: true },
      { dia: 'jueves', horas: [], habilitado: true },
      { dia: 'viernes', horas: [], habilitado: true },
      { dia: 'sábado', horas: [], habilitado: true },
    ];
  }

  agregarHora(horario: any) {
    // Obtiene la última hora en el arreglo de horas
    const ultimaHora = horario.horas[horario.horas.length - 1];
    // Calcula la siguiente hora
    const horaActual = this.siguienteHora(ultimaHora);
    // Agrega la hora actual al arreglo de horas
    if (horaActual !== null) {
      horario.horas.push(horaActual);
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

  agregarHoraInicio(hora: string) {
    this.horaInicio = hora;
    this.generarFranjasHorarias();
  }

  agregarHoraFin(hora: string) {
    this.horaFin = hora;
    this.generarFranjasHorarias();
  }

  quitarHoraInicio() {
    this.horaInicio = null;
    this.generarFranjasHorarias();
  }

  quitarHoraFin() {
    this.horaFin = null;
    this.generarFranjasHorarias();
  }


  generarFranjasHorarias(): { inicio: string; fin: string }[] {
    const franjas = [];
    const horaInicial = 8; // Hora de inicio
    const horaFinal = 11; // Hora de finalización (12:00 PM - 1 hora)

    for (let hora = horaInicial; hora <= horaFinal; hora++) {
      const inicio = `${hora.toString().padStart(2, '0')}:00 AM`;
      const fin = `${(hora + 1).toString().padStart(2, '0')}:00 AM`;

      franjas.push({ inicio, fin });
    }

    return franjas;
  }


  // Lógica para editar el horario
  editarHorario(horario: any) {
    // Almaceno el horario seleccionado en una variable temporal para edición
    this.horarioEditado = { ...horario };
    //redirigir a la vista de edición
  }

  // Actualizar el horario editado (después de la edición)
  guardarCambiosEdicion() {
    // Busca el horario editado en el arreglo de horarios por su referencia directa
    const indice = this.horarios.indexOf(this.horarioEditado);
    if (indice !== -1) {
      // Actualiza el horario editado en el arreglo de horarios
      this.horarios[indice] = { ...this.horarioEditado };
    }
  }


  // Agrega la lógica para redirigir a la vista de edición
  redirigirAEdicion() {
    // this.router.navigate(['/edicion-horario', this.horarioEditado.id]);
  }

  // Lógica para eliminar el horario con los botones de eliminar de angular material
  eliminarHorario(horario: any) {
    const confirmacion = window.confirm(`¿Seguro que deseas eliminar el horario para ${horario.dia}?`);
    if (confirmacion) {
      // Encuentra el índice del horario a eliminar en el arreglo de horarios
      const indice = this.horarios.findIndex((h) => h === horario);
      if (indice !== -1) {
        // Elimina el horario del arreglo
        this.horarios.splice(indice, 1);
      }
    }
  }

  //Lógica para eliminar horas en el mat-chip-list
  eliminarHora(horario: any, horaAEliminar: string) {
    const indice = horario.horas.indexOf(horaAEliminar);

    if (indice !== -1) {
      horario.horas.splice(indice, 1); // Elimina la hora del arreglo de horas
    }
  }

  getHorarios(): any[] {
    // Retorna una copia de los horarios
    return [...this.horarios];
  }

  // Agrega la lógica para guardar los horarios
  guardarHorarios(horarios: any[]): void {
    // Simula el guardado de horarios en el servidor
    this.horarios = horarios;
  }

}
