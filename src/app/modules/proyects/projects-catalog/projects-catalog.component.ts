import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { ApiService } from '@app/core/services/api.service';

@Component({
  selector: 'app-projects-catalog',
  templateUrl: './projects-catalog.component.html',
  styleUrls: ['./projects-catalog.component.css'],
})
export class ProjectsCatalogComponent implements OnInit {
  constructor(private api: ApiService, private route: Router) {}

  proyectos = [];
  ApiUrl;
  ngOnInit(): void {
    this.ApiUrl = this.api.API_URL;
    this.api.get('/proyectos').subscribe((data) =>{
      this.proyectos = data['proyectos'];
    }, (error) => {
      console.log(error);
    }, () => {
      console.log('Peticion finalizada');
    });
  }

  createProject(){
    this.route.navigate(['/create-project']);
  }
}
