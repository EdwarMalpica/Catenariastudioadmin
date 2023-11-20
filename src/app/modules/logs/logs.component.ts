import { Component, OnInit } from '@angular/core';
import { ApiService } from '@app/core/services/api.service';
import { AppState } from '@app/data/app.state';
import { isLoading } from '@app/data/shared/shared.action';
import { AlertsService } from '@app/shared/services/alerts.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css'],
})
export class LogsComponent implements OnInit {
  constructor(
    private store: Store<AppState>,
    private api: ApiService,
    private alerts: AlertsService
  ) {}
  logs: any[] = [];
  ngOnInit(): void {
    this.store.dispatch(isLoading({ isLoading: true }));
    this.getLogs();
  }

  getLogs() {
    this.api.get('logs').subscribe({
      next: (data: any) => {
        this.logs = data.logs;
        this.store.dispatch(isLoading({ isLoading: false }));
      },
      error: (error) => {
        this.alerts.showError(error.error.message);
        this.store.dispatch(isLoading({ isLoading: false }));
      },
    });
  }
}
