import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogoNuevoHorarioComponent } from './dialogo-nuevo-horario/dialogo-nuevo-horario.component';
import { Router } from '@angular/router';
import { ApiService } from '@app/core/services/api.service';
import { Store } from '@ngrx/store';
import { AppState } from '@app/data/app.state';
import { AlertsService } from '@app/shared/services/alerts.service';
import { isLoading } from '@app/data/shared/shared.action';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-horarios',
  templateUrl: './editar-horarios.component.html',
  styleUrls: ['./editar-horarios.component.scss'],
})
export class EditarHorariosComponent implements OnInit {
  horarios: any[];

  constructor(
    public dialog: MatDialog,
    private api: ApiService,
    private router: Router,
    private store: Store<AppState>,
    private alerts: AlertsService
  ) {
    this.store.dispatch(isLoading({ isLoading: true }));
  }
  ngOnInit(): void {
    this.loadSchedules();
  }

  // Para abrir el dialogo para establecer horaInicio y horaFin
  openDialog(dia: string): void {
    const dialogRef = this.dialog.open(DialogoNuevoHorarioComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log(result);
        for (let i = 0; i < this.horarios.length; i++) {
          if (this.horarios[i].dia == dia) {
            this.horarios[i].franjas.push({
              hora_inicio: result.horaInicio,
              hora_fin: result.horaFin,
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
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
    }).then((answer) => {
      if (answer.isConfirmed) {
        for (const horario of this.horarios) {
          if (horario.dia === dia) {
            for (let j = 0; j < horario.franjas.length; j++) {
              if (horario.franjas[j] === hora) {
                horario.franjas.splice(j, 1);
                break;
              }
            }
          }
        }
      }
    });
  }

  private loadSchedules(): void {
    this.api.get('horarios').subscribe({
      next: (data: any) => {
        this.horarios = data.horarios;
        this.store.dispatch(isLoading({ isLoading: false }));
      },
      error: (error) => {
        this.alerts.showError(error.error.message);
        this.store.dispatch(isLoading({ isLoading: false }));
      },
    });
  }

  public saveSchedules(): void {
    this.store.dispatch(isLoading({ isLoading: true }));
    this.api.post('horarios', { horarios: this.horarios }).subscribe({
      next: (data: any) => {
        this.alerts.showSuccess('Horarios actualizados con exito');
        this.store.dispatch(isLoading({ isLoading: false }));
      },
      error: (error) => {
        this.alerts.showError(error.error.message);
        this.store.dispatch(isLoading({ isLoading: false }));
      },
    });
  }

  public cancel() {
    this.router.navigate(['/horarios-atencion']);
  }
}
