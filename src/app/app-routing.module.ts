import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './perfil/perfil.component';

const routes: Routes = [
  { path: 'perfil', component: PerfilComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
   { path: 'home', loadChildren: () => import('./pages/home/home-routing.module').then(m => m.HomeRoutingModule) },
  { path: 'noutFound', loadChildren: () => import('./pages/not-found/not-found-routing.module').then(m => m.NotFoundRoutingModule) },
  { path: 'admin', loadChildren: () => import('./pages/admin/admin-routing.module').then(m => m.AdminRoutingModule) },
  { path: 'login', loadChildren: () => import('./pages/auth/login/login-routing.module').then(m => m.LoginRoutingModule) }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
