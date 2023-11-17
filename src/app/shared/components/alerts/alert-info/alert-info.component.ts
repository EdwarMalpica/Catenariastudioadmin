import { Component } from '@angular/core';
import { AlertsService } from 'src/app/shared/services/alerts.service';

@Component({
  selector: 'app-alert-info',
  templateUrl: './alert-info.component.html',
  styleUrls: ['./alert-info.component.css'],
})
export class AlertInfoComponent {
  constructor(private alerts: AlertsService) {}
  onSuccess(key: string) {
    //Acciones adicionales
    this.alerts.clear(key);
  }
  onReject(key: string) {
    this.alerts.clear(key);
  }
}
