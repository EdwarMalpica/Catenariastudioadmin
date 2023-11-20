import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HorariosRoutingModule } from './horarios-routing.module';
import { DialogoEliminarComponent } from './editar-horarios/dialogo-eliminar/dialogo-eliminar.component';
import { EditarHorariosComponent } from './editar-horarios/editar-horarios.component';
import { HorariosAtencionComponent } from './horarios-atencion/horarios-atencion.component';
import { DialogoNuevoHorarioComponent } from './editar-horarios/dialogo-nuevo-horario/dialogo-nuevo-horario.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    DialogoEliminarComponent,
    DialogoNuevoHorarioComponent,
    EditarHorariosComponent,
    HorariosAtencionComponent,
  ],
  imports: [
    CommonModule, HorariosRoutingModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatButtonModule,
    MatSlideToggleModule

  ],
})
export class HorariosModule {}
