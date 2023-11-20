import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/components/login/login.component';
import { HomeComponent } from './core/components/home/home.component';
import { authGuard } from './core/guards/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [authGuard] },
  {
    path: 'appointments',
    loadChildren: () =>
      import('./modules/appointments/appointments.module').then(
        (m) => m.AppointmentsModule
      ),
  },

  {
    path: 'appointments',
    loadChildren: () =>
      import('./modules/appointments/appointments.module').then(
        (m) => m.AppointmentsModule
      ),
    canActivate: [authGuard],
  },
  {
    path: 'proyects',
    loadChildren: () =>
      import('./modules/proyects/proyects.module').then(
        (m) => m.ProyectsModule
      ),
    canActivate: [authGuard],
  },
  {
    path: 'horarios',
    loadChildren: () =>
      import('./modules/horarios/horarios.module').then(
        (m) => m.HorariosModule
      ),
    canActivate: [authGuard],
  },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
