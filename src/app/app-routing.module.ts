import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentHistoryComponent } from './pages/appointment-history/appointment-history.component';
import { AppointmentDetailsComponent } from './pages/appointment-details/appointment-details.component';

const routes: Routes = [
  { path : 'appointment', component : AppointmentHistoryComponent},
  { path : 'appointment-detail/:id', component : AppointmentDetailsComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
