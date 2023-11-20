import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HorariosAtencionComponent } from './horarios-atencion/horarios-atencion.component';
import { EditarHorariosComponent } from './editar-horarios/editar-horarios.component';

const routes: Routes = [
  {path:'', component:HorariosAtencionComponent},
  {path:'edit',component:EditarHorariosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HorariosRoutingModule { }
