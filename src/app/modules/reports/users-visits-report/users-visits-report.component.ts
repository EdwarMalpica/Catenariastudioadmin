import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '@app/core/services/api.service';

@Component({
  selector: 'app-users-visits-report',
  templateUrl: './users-visits-report.component.html',
  styleUrls: ['./users-visits-report.component.css'],
})
export class UsersVisitsReportComponent {
  basicData: any;
  basicOptions: any;
  ApiUrl;
  registries_users_data_projects: any;
  registries_users_data_articles: any;
  loaded = false;
  months_projects = [];
  months_articles = [];
  values_months_projects = [];
  values_months_articles = [];
  max_users_month_project = 0;
  max_users_month_article = 0;
  minim_value_project = 0;
  minim_value_article = 0;
  minim_months_article = [];
  minim_months_project = [];
  max_months_article = [];
  max_months_project = [];
  total_visits_projects = 0;
  total_visits_articles = 0;
  most_visited_project = []
  most_visited_articles = []
  @Output() messageEvent = new EventEmitter<boolean>();


  constructor(private api: ApiService, private route: Router) {
    this.messageEvent.emit(true);
    this.load_data_projects();
  }

  load_data_projects() {
    this.api.get('logs/proyects').subscribe(
      (data) => {
        this.registries_users_data_projects =
          data['visitToProyectsForLast12Month'];
        this.total_visits_projects = data['visitToAllProyects'];
        this.most_visited_project = data['mostVisitedProyects'];
        this.set_months('A');
        this.indicesNumerosMinimos('A')
        this.found_max_months('A')
        this.load_data_articles();
        this.set_properties_chart();
      },
      (error) => {
        console.log(error);
      },
      () => {
        console.log('Peticion finalizada');
      }
    );
  }

  load_data_articles() {
    this.api.get('/logs/articles').subscribe(
      (data) => {
        this.registries_users_data_articles =
          data['visitToArticlesForLast12Month'];
        this.total_visits_articles = data['visitToAllArticles'];
        this.most_visited_articles = data['mostVisitedArticles'];
        this.set_months('B');
        this.indicesNumerosMinimos('B')
        this.found_max_months('B')
        this.loaded = true;
      },
      (error) => {
        console.log(error);
      },
      () => {
        console.log('Peticion finalizada');
      }
    );
  }

  set_properties_chart() {
    const documentStyle = getComputedStyle(document.documentElement);
    this.basicData = {
      labels: this.months_projects,
      datasets: [
        {
          label: 'Proyectos por mes',
          data: this.values_months_projects,
          fill: false,
          borderColor: documentStyle.getPropertyValue('--blue-500'),
          tension: 0.4,
        },
        {
          label: 'Artículos por mes',
          data: this.values_months_articles,
          fill: false,
          borderColor: documentStyle.getPropertyValue('--pink-500'),
          tension: 0.4,
        },
      ],
    };
  }

  set_months(option: string) {
    if (option == 'A') {
      this.registries_users_data_projects.forEach((currentObject) => {
        this.months_projects.push(currentObject['mes']);
        this.values_months_projects.push(currentObject['valor']);
        this.total_visits_projects += currentObject['valor'];
      });
      const maxNumber: number = Math.max(...this.values_months_projects);
    } else {
      this.registries_users_data_articles.forEach((currentObject) => {
        this.months_articles.push(currentObject['mes']);
        this.values_months_articles.push(currentObject['valor']);
        this.total_visits_articles += currentObject['valor'];
      });
    }
  }

  indicesNumerosMinimos(option: string) {
    if (option == 'A') {
      let array = this.values_months_projects;
      let minimo = array[0];
      for (let i = 0; i < array.length; i++) {
        const elementoActual = array[i];
        if (elementoActual <= minimo) {
          this.minim_value_project = minimo;
          minimo = elementoActual;
          this.minim_months_project.push(this.months_projects[i]);
        }
      }
    } else {
      let array = this.values_months_articles;
      let minimo = array[0];
      for (let i = 0; i < array.length; i++) {
        const elementoActual = array[i];
        if (elementoActual <= minimo) {
          this.minim_value_article = minimo;
          minimo = elementoActual;
          this.minim_months_article.push(this.months_articles[i]);
        }
      }
    }
  }
  found_max_months(option: string) {
    if (option == 'A') {
      let array = this.values_months_projects
      for (let i = 0; i < array.length; i++) {
        const current_number = array[i];
        console.log("Actual valor:  " ,current_number)
        if (current_number > this.max_users_month_project) {
          this.max_users_month_project = current_number;
          this.max_months_project.push(this.months_projects[i])
        }
      }
    } else {
      let array = this.values_months_articles
      for (let i = 0; i < array.length; i++) {
        const current_number = array[i];
        console.log("Actual valor:  " ,current_number)
        if (current_number > this.max_users_month_article) {
          this.max_users_month_article= current_number;
          this.max_months_article.push(this.months_articles[i])
        }
      }
    }
  }


}
