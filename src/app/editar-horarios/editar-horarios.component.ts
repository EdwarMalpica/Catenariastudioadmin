import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogoNuevoHorarioComponent } from './dialogo-nuevo-horario/dialogo-nuevo-horario.component';
import Swal from 'sweetalert2';
import { HorariosService } from '@app/services/horarios.service';
import { HorariosResponse } from '@app/models/dtos/horarios-response.interface';
import { HorariosRequest } from '@app/models/dtos/horarios-request.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-horarios',
  templateUrl: './editar-horarios.component.html',
  styleUrls: ['./editar-horarios.component.scss']
})
export class EditarHorariosComponent {

  //Var a usar en los métodos: --> manejo los horarios
  horarios: any[];
  horarioEditado: any
  // horaInicio: string | null = null;
  // horaFin: string | null = null;
  //
  horariosToGuardar: any[] = [];


  constructor(public dialog: MatDialog, private horariosService: HorariosService, private router: Router) {
    // Definición de horarios:
    this.horarios = [
      // { habilitado: true, dia: 'lunes', horas: this.generarHoras(), horaInicio: '08:00 AM', horaFin: '04:00 PM'  },
      // { dia: 'lunes', horas: [], hora: '10:00 AM', habilitado: true },
      // { dia: 'martes', horas: [], hora: '10:00 AM', habilitado: true },
      // { dia: 'miércoles', horas: [], habilitado: true },
      // { dia: 'jueves', horas: [], habilitado: true },
      // { dia: 'viernes', horas: [], habilitado: true },
      // { dia: 'sábado', horas: [], habilitado: true },
    ];
    this.loadSchedules();
  }

  // Para abrir el dialogo para establecer horaInicio y horaFin
  openDialog(dia: string): void {
    const dialogRef = this.dialog.open(DialogoNuevoHorarioComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result);
        for (let i = 0; i < this.horarios.length; i++) {
          if (this.horarios[i].dia == dia) {
            this.horarios[i].franjas.push({
              hora_inicio : result.horaInicio,
              hora_fin : result.horaFin,
            });
          }
        }
      }
    });
  }

  //Para eliminar los horarios en los mat-chip
  deleteSchedule(dia: string, hora: string) {
    Swal.fire({
      title: '¿Desea eliminar este horario?',
      icon: 'info',

      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText:
        'Aceptar',

      cancelButtonText:
        'Cancelar',

    }).then((answer) => {

      if (answer.isConfirmed) {
        for (let i = 0; i < this.horarios.length; i++) {
          if (this.horarios[i].dia == dia) {
            for (let j = 0; j < this.horarios[i].franjas.length; j++) {
              if (this.horarios[i].franjas[j] == hora) {
                //elimina 1 en la posición 1
                this.horarios[i].franjas.splice(j, 1);
                break;
              }

            }
          }
        }

      }

    });
  }

  // Lógica para guardar los horarios
  guardarHorarios(horarios: any[]): void {
    // Simula el guardado de horarios en el servidor

  }

  private loadSchedules(): void{
    this.horariosService.getSchedule().subscribe(
      (schedules: HorariosResponse)=>{
        console.log(schedules);
        this.horarios=schedules.horarios;
      }
    );


  }

  public saveSchedules(): void{
    let request:HorariosRequest = {horarios:this.horarios};
    this.horariosService.updatedSchedule(request).subscribe((response:any)=>{

    },
    (exceptionVar:any)=>{
      console.log(exceptionVar);
      if (exceptionVar.status==200) {
        Swal.fire({
          icon: 'success',
          title: 'Las franjas horarias han sido guardadas con éxito',
          showConfirmButton: false,
        })
      }
    }

    );


  }

  private deleteFranjaHoraria(): void{

  }

  public cancel(){
    this.router.navigate(['/horarios-atencion']);
  }

}
