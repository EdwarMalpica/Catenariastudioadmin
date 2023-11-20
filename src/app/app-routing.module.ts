import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/components/login/login.component';
import { HomeComponent } from './core/components/home/home.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login',component: LoginComponent },
  { path: 'home' ,component:HomeComponent},
  {path: 'appointments', loadChildren: () => import('./modules/appointments/appointments.module').then(m => m.AppointmentsModule)},
  {path: 'proyects', loadChildren: () => import('./modules/proyects/proyects.module').then(m => m.ProyectsModule)},
  {path: 'horarios', loadChildren: () => import('./modules/horarios/horarios.module').then(m => m.HorariosModule)},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
