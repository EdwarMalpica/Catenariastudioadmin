import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { ReportsComponent } from './reports/reports.component';
import {CardModule} from 'primeng/card';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { ChartModule } from 'primeng/chart';
import { ProjectCreateReportComponent } from './project-create-report/project-create-report.component';



@NgModule({
  declarations: [
    ReportsComponent,
    ProjectCreateReportComponent,
  ],
  imports: [
    CommonModule,
    DropdownModule,
    ChartModule,
    CardModule,
    ProgressSpinnerModule,
  ]
})
export class ReportsModule { }
