import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class AlertsService {
  constructor(private messageService: MessageService) {}

  showSuccess(message: string) {
    this.messageService.clear();
    this.messageService.add({
      key: 'br-success',
      severity: 'success',
      summary: 'Proceso Exitoso',
      detail: message,
      closable: false,
      life: 5000,
    });

  }
  showError(message: string) {
    this.messageService.clear();
    this.messageService.add({
      key: 'br-error',
      severity: 'error',
      summary: 'Error',
      detail: message,
      closable: false,
      sticky: true,
    });
  }
  showInfo(message: string) {
    this.messageService.clear();
    this.messageService.add({
      key: 'br-info',
      severity: 'info',
      summary: 'Info',
      detail: message,
      closable: false,
    });
  }
  showWarn(message: string) {
    this.messageService.clear();
    this.messageService.add({
      key: 'br-warn',
      severity: 'warn',
      summary: 'Warning',
      detail: message,
      closable: false,
    });
  }
  showConfirm(message: string) {
    this.messageService.clear();
    this.messageService.add({
      key: 'br-success',
      severity: 'info',
      detail: message,
      closable: false,
      sticky: true,
    });
  }
  showCookiesConfirm(message: string) {
    this.messageService.clear();
    this.messageService.add({
      key: 'cookies',
      severity: 'info',
      detail: message,
      closable: false,
      sticky: true,
    });
  }
  showMessage(summary: string, message: string) {
    this.messageService.add({
      key: 'br-message',
      severity: 'info',
      summary: summary,
      detail: message,
      closable: false,
      sticky: true,
    });
  }
  clear(key?: string) {
    this.messageService.clear(key);
  }
  clearAll() {
    this.messageService.clear();
  }
}
