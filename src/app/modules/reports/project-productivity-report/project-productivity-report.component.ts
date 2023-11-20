import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ApiService } from '@app/core/services/api.service';
import { AppState } from '@app/data/app.state';
import { isLoading } from '@app/data/shared/shared.action';
import { AlertsService } from '@app/shared/services/alerts.service';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
@Component({
  selector: 'app-project-productivity-report',
  templateUrl: './project-productivity-report.component.html',
  styleUrls: ['./project-productivity-report.component.css'],
})
export class ProjectProductivityReportComponent implements OnInit {
  basicData: any;
  basicOptions: any;
  lineStylesData: any;
  proyectos: any;
  ApiUrl;
  report_projects_by_month: Record<string, number> = {}; //Almacena los mese por numero de proyectos creados
  highestValue = Number.MIN_SAFE_INTEGER;
  lowestValue = Number.MAX_SAFE_INTEGER;
  highestMonths: string[] = [];
  lowestMonths: string[] = [];
  @Output() messageEvent = new EventEmitter<boolean>();

  constructor(private api: ApiService,
     private route: Router,
     private store:Store<AppState>,
     private alerts:AlertsService) {
    this.messageEvent.emit(true);
    this.store.dispatch(isLoading({ isLoading: true }));
    this.load_data();
  }

  ngOnInit() {}

  count_by_month() {
    let dates = [];
    const patronMes = /\b\d{4}-(\d{2})-\d{2}\b/;
    this.proyectos.forEach((current_project) => {
      let date = current_project['fecha_creacion'].split('-');
      dates.push(date[1]); //extraemos solo el mes de la fecha
    });
    this.report_projects_by_month = this.countMonths(dates);
    this.getExtremeMonths();
  }

  load_data() {
    this.api.get('proyectos').subscribe(
      (data) => {
        this.proyectos = data['proyectos'];
        this.store.dispatch(isLoading({ isLoading: false }));
        this.count_by_month();
        this.set_properties_chart();
      },
      (error) => {
        this.alerts.showError(error.error.message);
        this.store.dispatch(isLoading({ isLoading: false }));
      },
      () => {
        
      }
    );
  }

  set_properties_chart() {
    this.basicData = {
      labels: Object.keys(this.report_projects_by_month),
      datasets: [
        {
          label: 'Publicaciones en meses',
          data: Object.values(this.report_projects_by_month),
          fill: false,
          borderColor: '#42A5F5',
          tension: 0.4,
        },
      ],
    };
  }

  countMonths(monthsArray: string[]): Record<string, number> {
    const monthsCounted: Record<string, number> = {};

    for (const month of monthsArray) {
      const fullMonthName = new Date(`${month}-01-01`).toLocaleString(
        'default',
        { month: 'long' }
      );
      monthsCounted[fullMonthName] = (monthsCounted[fullMonthName] || 0) + 1;
    }

    return monthsCounted;
  }

  getExtremeMonths() {
    let months = this.report_projects_by_month;
    const monthNames = Object.keys(months);

    for (const monthName of monthNames) {
      const value = months[monthName];

      if (value > this.highestValue) {
        this.highestMonths.length = 0;
        this.highestMonths.push(monthName);
        this.highestValue = value;
      } else if (value === this.highestValue) {
        this.highestMonths.push(monthName);
      }

      if (value < this.lowestValue) {
        this.lowestMonths.length = 0;
        this.lowestMonths.push(monthName);
        this.lowestValue = value;
      } else if (value === this.lowestValue) {
        this.lowestMonths.push(monthName);
      }
    }
  }
}
