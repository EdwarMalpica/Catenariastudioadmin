import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleCatalogComponent } from './article-catalog/article-catalog.component';
import { CreateArticleComponent } from './create-article/create-article.component';

const routes: Routes = [
  {path: '', component:ArticleCatalogComponent},
  {path: 'create',component: CreateArticleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule { }
