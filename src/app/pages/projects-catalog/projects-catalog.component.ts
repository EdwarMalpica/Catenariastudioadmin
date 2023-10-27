import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ApiServiceService } from '@app/services/api/api-service.service';

@Component({
  selector: 'app-projects-catalog',
  templateUrl: './projects-catalog.component.html',
  styleUrls: ['./projects-catalog.component.css'],
})
export class ProjectsCatalogComponent implements OnInit {
  constructor(private api: ApiServiceService, private route: Router) {}

  proyectos = [];
  ApiUrl;
  ngOnInit(): void {
    this.ApiUrl = this.api.apiUrl;
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
