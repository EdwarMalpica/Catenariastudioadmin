import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertInfoComponent } from './components/alerts/alert-info/alert-info.component';
import { AlertErrorComponent } from './components/alerts/alert-error/alert-error.component';
import { AlertMessageComponent } from './components/alerts/alert-message/alert-message.component';
import { AlertSuccessComponent } from './components/alerts/alert-success/alert-success.component';
import { ToastModule } from 'primeng/toast';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { AlertWarnComponent } from './components/alerts/alert-warn/alert-warn.component';
import { LoaderGeneralComponent } from './components/loaders/loader-general/loader-general.component';
import { LoaderButtonComponent } from './components/loaders/loader-button/loader-button.component';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    AlertInfoComponent,
    AlertErrorComponent,
    AlertMessageComponent,
    AlertSuccessComponent,
    AlertWarnComponent,
    LoaderGeneralComponent,
    LoaderButtonComponent,
  ],
  imports: [CommonModule, ToastModule, MessageModule, MessagesModule],
  providers: [MessageService],
  exports: [
    AlertInfoComponent,
    AlertErrorComponent,
    AlertMessageComponent,
    AlertSuccessComponent,
    AlertWarnComponent,
    LoaderGeneralComponent,
    LoaderButtonComponent,
  ],
})
export class SharedModule {}
