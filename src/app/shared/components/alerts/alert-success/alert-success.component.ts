import { Component } from '@angular/core';
import { AlertsService } from 'src/app/shared/services/alerts.service';

@Component({
  selector: 'app-alert-success',
  templateUrl: './alert-success.component.html',
  styleUrls: ['./alert-success.component.css'],
})
export class AlertSuccessComponent {
  constructor(private alerts: AlertsService) {}
  onSuccess(key: string) {
    //Acciones adicionales
    this.alerts.clear(key);
  }
  onReject(key: string) {
    this.alerts.clear(key);
  }
}
