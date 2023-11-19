import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/components/login/login.component';
import { HomeComponent } from './core/components/home/home.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login',component: LoginComponent },
  { path: 'home' ,component:HomeComponent},
  {path: 'appointments', loadChildren: () => import('./modules/appointments/appointments.module').then(m => m.AppointmentsModule)},
  {path: 'reports', loadChildren: () => import('./modules/appointments/appointments.module').then(m => m.AppointmentsModule)},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
