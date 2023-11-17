import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentHistoryComponent } from './pages/appointment-history/appointment-history.component';
import { AppointmentDetailsComponent } from './pages/appointment-details/appointment-details.component';
import { PerfilComponent } from './modules/perfil/perfil.component';
import { HorariosAtencionComponent } from './modules/horarios-atencion/horarios-atencion.component';
import { EditarHorariosComponent } from './editar-horarios/editar-horarios.component';
import { CreateProjectComponent } from './pages/create-project/create-project.component';
import { ProjectsCatalogComponent } from './pages/projects-catalog/projects-catalog.component';
import { ProjectDetailsComponent } from './pages/project-details/project-details.component';
import { LoginComponent } from './core/components/login/login.component';


const routes: Routes = [
  { path: 'perfil', component: PerfilComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
   { path: 'home', loadChildren: () => import('./pages/home/home-routing.module').then(m => m.HomeRoutingModule) },
  { path: 'noutFound', loadChildren: () => import('./pages/not-found/not-found-routing.module').then(m => m.NotFoundRoutingModule) },
  { path: 'admin', loadChildren: () => import('./pages/admin/admin-routing.module').then(m => m.AdminRoutingModule) },
  { path: 'login',component: LoginComponent },
  { path: 'horarios-atencion', component: HorariosAtencionComponent},
  { path: 'editar-horarios', component: EditarHorariosComponent},
  { path : 'appointment', component : AppointmentHistoryComponent},
  { path : 'appointment-detail/:id', component : AppointmentDetailsComponent},
  { path : 'appointment-detail/:id', component : AppointmentDetailsComponent},
  { path : 'create-project', component : CreateProjectComponent},
  { path : 'project-catalog', component : ProjectsCatalogComponent},
  { path : 'project-details/:id', component : ProjectDetailsComponent},


];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
