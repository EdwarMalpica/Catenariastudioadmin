import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '@app/core/services/api.service';
import { AppState } from '@app/data/app.state';
import { URL_API_GET_APOINTMENTS_REPORT } from '@app/data/constants/constants';
import { isLoading } from '@app/data/shared/shared.action';
import { AlertsService } from '@app/shared/services/alerts.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-appointments-visits-report',
  templateUrl: './appointments-visits-report.component.html',
  styleUrls: ['./appointments-visits-report.component.css']
})
export class AppointmentsVisitsReportComponent implements OnInit{


  data: any;
  options: any;
  report_type_projects:Object = {}
  sorted_type_projects:Object = {}
  top_element_key:string
  top_element_values:number
  button_element_key:string
  button_element_values:number
  total_appointment = 0
  appointment_data = [];
  ApiUrl;
  loaded = false
  months = []
  values_months = []
  minim_months = []
  minim_value = 0
  max_months = []
  max_value = 0
  @Output() messageEvent = new EventEmitter<boolean>();
  appointment: any;
  store: any;
  alerts: any;



  constructor(
    private api: ApiService,
    private route: Router,
    private storeN:Store<AppState>,
    private alertsN:AlertsService) {
    this.messageEvent.emit(true);
    this.storeN.dispatch(isLoading({ isLoading: true }));
    this.set_months()
    this.load_data();
  }


  ngOnInit(): void {

    this.api.get(`${ URL_API_GET_APOINTMENTS_REPORT}`).subscribe({
      next: (report: any) => {
        this.appointment = report.cita;
        this.storeN.dispatch(isLoading({ isLoading: false }));
      },
      error: (error) => {
        this.alerts.showError(error.error.message);
        this.storeN.dispatch(isLoading({ isLoading: false }));
      },
    });
  }

  load_data(){
    this.api.get('logs/citas').subscribe((data) =>{
      this.appointment_data = data['citasForLast12Month'];
      this.total_appointment = data["visitToAllCitas"]
      this.set_months()
      this.indicesNumerosMinimos()
      this.found_max_months()
      this.set_chart_properties()
      this.storeN.dispatch(isLoading({ isLoading: false }));
    }, (error) => {
      this.alerts.showError(error.error.message);
      this.store.dispatch(isLoading({ isLoading: false }));
    }, () => {
      this.storeN.dispatch(isLoading({ isLoading: false }));
    });
  }

  set_months(){
    this.appointment_data.forEach(currentObject=> {
      this.months.push(currentObject['mes'])
      this.values_months.push(currentObject['valor'])
    });
    this.months = this.months.reverse();
    this.values_months = this.values_months.reverse();
  }


  set_chart_properties(){
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.data = {
        datasets: [
            {
                data: this.values_months,
                backgroundColor: [
                  '#EC407A',
                  '#AB47BC',
                  '#42A5F5',
                  '#7E57C2',
                  '#66BB6A',
                  '#FFCA28',
                  '#26A69A'
                ],
                label: 'Citas Agendadas'
            }
        ],
        labels: this.months
    };

    this.options = {
        plugins: {
            legend: {
                labels: {
                    color: textColor
                }
            }
        },
        scales: {
            r: {
                grid: {
                    color: surfaceBorder
                }
            }
        }
    };
  }

  indicesNumerosMinimos(){
    let array = this.values_months
    let minimo = array[0];
    let indicesMinimos: number[] = [0];

    for (let i = 0; i < array.length; i++) {
      const elementoActual = array[i];
      if (elementoActual <= minimo) {
        this.minim_value = minimo
        minimo = elementoActual;
        this.minim_months.push(this.months[i])
        indicesMinimos = [i];
      }
    }
  }

  found_max_months(){
    let array = this.values_months
    for (let i = 0; i < array.length; i++) {
      const current_number = array[i];
      if (current_number > this.max_value) {
        this.max_value = current_number;
        this.max_months.push(this.months[i])
      }
    }
  }

}
