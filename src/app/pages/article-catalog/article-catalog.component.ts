import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '@app/services/api/api-service.service';

@Component({
  selector: 'app-article-catalog',
  templateUrl: './article-catalog.component.html',
  styleUrls: ['./article-catalog.component.css']
})
export class ArticleCatalogComponent {

  constructor(private api: ApiServiceService, private route: Router) {}

  articles = [];
  ApiUrl;
  ngOnInit(): void {
    this.ApiUrl = this.api.apiUrl;
    this.api.get('/articles').subscribe((data) =>{
      this.articles = data['articles'];
    }, (error) => {
      console.log(error);
    }, () => {
      console.log('Peticion finalizada');
    });
  }

  createProject(){
    this.route.navigate(['/create-article']);
  }
}
