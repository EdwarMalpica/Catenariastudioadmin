import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '@app/core/services/api.service';
import { AppState } from '@app/data/app.state';
import { isLoading } from '@app/data/shared/shared.action';
import { AlertsService } from '@app/shared/services/alerts.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-users-registry-report',
  templateUrl: './users-registry-report.component.html',
  styleUrls: ['./users-registry-report.component.css'],
})
export class UsersRegistryReportComponent implements OnInit {
  increaseInRegisterUsersLastMonth = 0;
  increaseInVisitToThePageLastMonth = 0;
  loginUsers = 0;
  loginUsersLastMonth = 0;
  loginUsersThisWeek = 0;
  loginUsersLastYear = 0;
  registerUsers = 0;
  registerUsersLastMonth = 0;
  registerUsersThisWeek = 0;
  registerUsersLastYear = 0;
  visitToThePage = 0;
  visitToThePageLastMonth = 0;
  visitToThePageThisWeek = 0;
  visitToThePageLastYear = 0;
  loginUsersForLast12Month = [];
  registerUsersForLast12Month = [];
  visitToThePageForLast12Month = [];

  basicData: any;
  basicOptions: any;
  dataVisitToThePage: any;
  dataLoginUsers: any;
  dataRegisterUsers: any;
  ApiUrl;
  registries_users_data: any;
  months = [];
  values_months = [];
  max_users_month = 0;
  total_registries = 0;
  minim_months = [];
  max_months = [];
  max_value = 0;
  configCharts = {
    type: 'bar',
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
      },
    },
  };
  @Output() messageEvent = new EventEmitter<boolean>();

  constructor(
    private api: ApiService,
    private route: Router,
    private store: Store<AppState>,
    private alerts: AlertsService
  ) {
    this.store.dispatch(isLoading({ isLoading: true }));
    this.messageEvent.emit(true);
  }
  ngOnInit(): void {
    this.load_data();
    this.configCharts = {
      type: 'bar',
      options: {
        responsive: false,
        plugins: {
          legend: {
            position: 'top',
          },
        },
      },
    };
  }

  extractData(data: any, label: string) {
    let months = [];
    let values_months = [];
    data.forEach((currentObject) => {
      months.push(currentObject['mes']);
      values_months.push(currentObject['valor']);
    });
    months = months.reverse();
    values_months = values_months.reverse();
    return {
      labels: months,
      datasets: [
        {
          label: label,
          data: values_months,
          fill: true,
          backgroundColor:'#086970',
          borderColor:'#086970',
          tension: 0.4,
        },
      ],
    };
  }

  load_data() {
    this.api.get('logs/users').subscribe({
      next: (data: any) => {
        this.registries_users_data = data.registerUsersForLast12Month;
        this.increaseInRegisterUsersLastMonth =
          data.increaseInRegisterUsersLastMonth;
        this.increaseInVisitToThePageLastMonth =
          data.increaseInVisitToThePageLastMonth;
        this.loginUsers = data.loginUsers;
        this.loginUsersLastMonth = data.loginUsersLastMonth;
        this.loginUsersThisWeek = data.loginUsersThisWeek;
        this.loginUsersLastYear = data.loginUsersLastYear;
        this.registerUsers = data.registerUsers;
        this.registerUsersLastMonth = data.registerUsersLastMonth;
        this.registerUsersThisWeek = data.registerUsersThisWeek;
        this.registerUsersLastYear = data.registerUsersLastYear;
        this.visitToThePage = data.visitToThePage;
        this.visitToThePageLastMonth = data.visitToThePageLastMonth;
        this.visitToThePageThisWeek = data.visitToThePageThisWeek;
        this.visitToThePageLastYear = data.visitToThePageLastYear;
        this.loginUsersForLast12Month = data.loginUsersForLast12Month;
        this.registerUsersForLast12Month = data.registerUsersForLast12Month;
        this.visitToThePageForLast12Month = data.visitToThePageForLast12Month;
        this.dataVisitToThePage = this.extractData(
          this.visitToThePageForLast12Month,
          'Visitas a la página'
        );
        this.dataLoginUsers = this.extractData(
          this.loginUsersForLast12Month,
          'Inicios de sesión'
        );
        this.dataRegisterUsers = this.extractData(
          this.registerUsersForLast12Month,
          'Usuarios registrados'
        );
        this.store.dispatch(isLoading({ isLoading: false }));
      },
      error: (error) => {
        this.alerts.showError(error.error.message);
        this.store.dispatch(isLoading({ isLoading: false }));
      },
    });
  }

  set_properties_chart() {
    const documentStyle = getComputedStyle(document.documentElement);
    this.basicData = {
      labels: this.months,
      datasets: [
        {
          label: 'Publicaciones en meses',
          data: this.values_months,
          fill: false,
          borderColor: documentStyle.getPropertyValue('--green-500'),
          tension: 0.4,
        },
      ],
    };
  }

  set_months() {
    this.registries_users_data.forEach((currentObject) => {
      this.months.push(currentObject['mes']);
      this.values_months.push(currentObject['valor']);
      this.total_registries += currentObject['valor'];
    });
    const maxNumber: number = Math.max(...this.values_months);
  }

  indicesNumerosMinimos(): number[] {
    let array = this.values_months;
    let minimo = array[0];
    let indicesMinimos: number[] = [0];

    for (let i = 0; i < array.length; i++) {
      const elementoActual = array[i];
      if (elementoActual <= minimo) {
        minimo = elementoActual;
        this.minim_months.push(this.months[i]);
        indicesMinimos = [i];
      }
    }
    return indicesMinimos;
  }

  found_max_months() {
    let array = this.values_months;
    let max_indices: number[] = [0];
    for (let i = 0; i < array.length; i++) {
      const current_number = array[i];
      if (current_number >= this.max_value) {
        this.max_value = current_number;
        this.max_months.push(this.months[i]);
      }
    }
  }
}
