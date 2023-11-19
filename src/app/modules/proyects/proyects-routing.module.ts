import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsCatalogComponent } from './projects-catalog/projects-catalog.component';

const routes: Routes = [
  {path: '', component:ProjectsCatalogComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProyectsRoutingModule { }
