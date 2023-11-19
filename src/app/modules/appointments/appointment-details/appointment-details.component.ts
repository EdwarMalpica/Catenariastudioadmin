import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '@app/core/services/api.service';
import { AppState } from '@app/data/app.state';
import { URL_API_GET_APOINTMENTS } from '@app/data/constants/constants';
import { isLoading } from '@app/data/shared/shared.action';
import { AlertsService } from '@app/shared/services/alerts.service';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-appointment-details',
  templateUrl: './appointment-details.component.html',
  styleUrls: ['./appointment-details.component.css']
})
export class AppointmentDetailsComponent implements OnInit{

  appointment:any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private api:ApiService,
    private alerts:AlertsService,
    private store:Store<AppState>) {

   }

  ngOnInit(): void {
    this.store.dispatch(isLoading({isLoading:true}));
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.api.get(`${URL_API_GET_APOINTMENTS}/${id}`).subscribe({
        next: (report: any) => {
          this.appointment = report.cita;
          this.store.dispatch(isLoading({ isLoading: false }));
        },
        error: (error) => {
          this.alerts.showError(error.error.message);
          this.store.dispatch(isLoading({ isLoading: false }));
        },
      });
    }
  }
}
