import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProyectsRoutingModule } from './proyects-routing.module';
import { CreateProjectComponent } from './create-project/create-project.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectsCatalogComponent } from './projects-catalog/projects-catalog.component';
import { EditorModule } from 'primeng/editor';
import { FileUploadModule } from 'primeng/fileupload';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@app/shared/shared.module';


@NgModule({
  declarations: [CreateProjectComponent, ProjectDetailsComponent, ProjectsCatalogComponent],
  imports: [
    CommonModule,
    ProyectsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    EditorModule,
    FileUploadModule,
    SharedModule,
  ]
})
export class ProyectsModule { }
