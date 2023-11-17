import { Component } from '@angular/core';
import { AlertsService } from 'src/app/shared/services/alerts.service';

@Component({
  selector: 'app-alert-message',
  templateUrl: './alert-message.component.html',
  styleUrls: ['./alert-message.component.css'],
})
export class AlertMessageComponent {
  constructor(private alerts: AlertsService) {}
  onSuccess(key: string) {
    //Acciones adicionales
    this.alerts.clear(key);
  }
  onReject(key: string) {
    this.alerts.clear(key);
  }
}
