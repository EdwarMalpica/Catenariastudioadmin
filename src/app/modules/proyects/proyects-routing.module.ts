import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsCatalogComponent } from './projects-catalog/projects-catalog.component';
import { CreateProjectComponent } from './create-project/create-project.component';

const routes: Routes = [
  {path: '', component:ProjectsCatalogComponent},
  {path: 'create',component: CreateProjectComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProyectsRoutingModule { }
