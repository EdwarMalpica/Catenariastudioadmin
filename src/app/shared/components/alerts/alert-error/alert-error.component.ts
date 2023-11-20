import { Component } from '@angular/core';
import { AlertsService } from 'src/app/shared/services/alerts.service';

@Component({
  selector: 'app-alert-error',
  templateUrl: './alert-error.component.html',
  styleUrls: ['./alert-error.component.css'],
})
export class AlertErrorComponent {
  constructor(private alerts: AlertsService) {}
  onSuccess(key: string) {
    this.alerts.clear(key);
  }
  onReject(key: string) {
    this.alerts.clear(key);
  }
}
