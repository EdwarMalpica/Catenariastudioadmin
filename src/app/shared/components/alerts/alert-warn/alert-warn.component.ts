import { Component } from '@angular/core';
import { AlertsService } from 'src/app/shared/services/alerts.service';

@Component({
  selector: 'app-alert-warn',
  templateUrl: './alert-warn.component.html',
  styleUrls: ['./alert-warn.component.css'],
})
export class AlertWarnComponent {
  constructor(private alerts: AlertsService) {}
  onSuccess(key: string) {
    //Acciones adicionales
    this.alerts.clear(key);
  }
  onReject(key: string) {
    this.alerts.clear(key);
  }
}
