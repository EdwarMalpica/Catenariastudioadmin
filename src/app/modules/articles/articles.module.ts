import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { CreateArticleComponent } from './create-article/create-article.component';
import { ArticleCatalogComponent } from './article-catalog/article-catalog.component';
import { EditorModule } from 'primeng/editor';
import { FileUploadModule } from 'primeng/fileupload';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@app/shared/shared.module';


@NgModule({
  declarations: [
    CreateArticleComponent,
    ArticleCatalogComponent
  ],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    EditorModule,
    FileUploadModule,
    SharedModule,
  ]
})
export class ArticlesModule { }
