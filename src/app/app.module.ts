import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppointmentHistoryComponent } from './pages/appointment-history/appointment-history.component';
import { DropdownComponent } from './componentes/dropdown/dropdown.component';
import { AppointmentDetailsComponent } from './pages/appointment-details/appointment-details.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { MaterialModule } from '@app/material.module';

import { PerfilComponent } from './perfil/perfil.component';
import {MatIconModule} from '@angular/material/icon';
import { FooterComponent } from './shared/components/footer/footer.component';
import { SidebarModule } from './shared/components/sidebar/sidebar.module';
import { LoginModule } from './pages/auth/login/login.module';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';

// Para componente de horario-atención --> MatIconModule, BrowserAnimationsModule
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { HorariosAtencionComponent } from './horarios-atencion/horarios-atencion.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatChipsModule} from '@angular/material/chips';
import { EditarHorariosComponent } from './editar-horarios/editar-horarios.component';

//Ventanas modales
import {MatDialogModule} from '@angular/material/dialog';
import { DialogoNuevoHorarioComponent } from './editar-horarios/dialogo-nuevo-horario/dialogo-nuevo-horario.component';
import { DialogoEliminarComponent } from './editar-horarios/dialogo-eliminar/dialogo-eliminar.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { MenuComponent } from './shared/components/menu/menu.component';
import { ProjectsCatalogComponent } from './pages/projects-catalog/projects-catalog.component';
import { ProjectDetailsComponent } from './pages/project-details/project-details.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AppointmentHistoryComponent,
    DropdownComponent,
    AppointmentDetailsComponent,
    FooterComponent,
    PerfilComponent,
    HorariosAtencionComponent,
    EditarHorariosComponent,
    DialogoNuevoHorarioComponent,
    DialogoEliminarComponent,
    MenuComponent,
    ProjectsCatalogComponent,
    ProjectDetailsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    SidebarModule,
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    LoginModule,
    HttpClientModule,
    MatButtonModule,
    MatTableModule,
    MatSlideToggleModule,
    MatChipsModule,
    MatDialogModule,
    ReactiveFormsModule,
    SweetAlert2Module,
    HttpClientModule

  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
