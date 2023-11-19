import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HorariosRoutingModule } from './horarios-routing.module';
import { DialogoEliminarComponent } from './editar-horarios/dialogo-eliminar/dialogo-eliminar.component';
import { EditarHorariosComponent } from './editar-horarios/editar-horarios.component';
import { HorariosAtencionComponent } from './horarios-atencion/horarios-atencion.component';


@NgModule({
  declarations: [DialogoEliminarComponent,EditarHorariosComponent,HorariosAtencionComponent],
  imports: [
    CommonModule,
    HorariosRoutingModule
  ]
})
export class HorariosModule { }
