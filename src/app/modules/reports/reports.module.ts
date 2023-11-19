import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { AppointmentsVisitsReportComponent } from './appointments-visits-report/appointments-visits-report.component';
import { ProjectCreateReportComponent } from './project-create-report/project-create-report.component';
import { ProjectProductivityReportComponent } from './project-productivity-report/project-productivity-report.component';
import { UsersRegistryReportComponent } from './users-registry-report/users-registry-report.component';
import { UsersVisitsReportComponent } from './users-visits-report/users-visits-report.component';
import { ChartModule } from 'primeng/chart';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [
    AppointmentsVisitsReportComponent,
    ProjectCreateReportComponent,
    ProjectProductivityReportComponent,
    UsersRegistryReportComponent,
    UsersVisitsReportComponent,
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    ChartModule,
    ProgressSpinnerModule,
    CardModule,
  ],
})
export class ReportsModule {}
