import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersRegistryReportComponent } from './users-registry-report/users-registry-report.component';
import { ProjectProductivityReportComponent } from './project-productivity-report/project-productivity-report.component';
import { ProjectCreateReportComponent } from './project-create-report/project-create-report.component';
import { AppointmentsVisitsReportComponent } from './appointments-visits-report/appointments-visits-report.component';

const routes: Routes = [
  {path: 'users',component:UsersRegistryReportComponent},
  {path: 'proyects',component:ProjectProductivityReportComponent},
  {path: 'articulos', component: ProjectCreateReportComponent},
  {path: 'citas', component: AppointmentsVisitsReportComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
