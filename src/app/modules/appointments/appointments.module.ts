import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointmentsRoutingModule } from './appointments-routing.module';
import { AppointmentHistoryComponent } from './appointment-history/appointment-history.component';
import { AppointmentDetailsComponent } from './appointment-details/appointment-details.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { SharedModule } from '@app/shared/shared.module';


@NgModule({
  declarations: [AppointmentHistoryComponent, AppointmentDetailsComponent, DropdownComponent],
  imports: [
    CommonModule,
    AppointmentsRoutingModule,
    SharedModule
  ]
})
export class AppointmentsModule { }
