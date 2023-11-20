import { Component, OnInit } from '@angular/core';
import { ApiService } from '@app/core/services/api.service';
import { AppState } from '@app/data/app.state';
import { isLoading } from '@app/data/shared/shared.action';
import { AlertsService } from '@app/shared/services/alerts.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-horarios-atencion',
  templateUrl: './horarios-atencion.component.html',
  styleUrls: ['./horarios-atencion.component.scss'],
})
export class HorariosAtencionComponent implements OnInit {
  horarios: any[] = [];

  constructor(private api: ApiService,
    private store:Store<AppState>,
    private alerts:AlertsService) {
      this.store.dispatch(isLoading({isLoading:true}));
  }
  ngOnInit(): void {
    this.loadSchedules();
  }

  private loadSchedules(): void {
    this.api.get('horarios').subscribe({
      next: (data: any) => {
        this.horarios = data.horarios;
        this.store.dispatch(isLoading({isLoading:false}));
      },
      error: (error) => {
        this.alerts.showError(error.error.message);
        this.store.dispatch(isLoading({isLoading:false}));
      },
    });
  }
}
