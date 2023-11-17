import { CUSTOM_ELEMENTS_SCHEMA, NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppointmentHistoryComponent } from './pages/appointment-history/appointment-history.component';
import { DropdownComponent } from './core/components/dropdown/dropdown.component';
import { AppointmentDetailsComponent } from './pages/appointment-details/appointment-details.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { MaterialModule } from '@app/material.module';

import { PerfilComponent } from './modules/perfil/perfil.component';
import {MatIconModule} from '@angular/material/icon';
import { FooterComponent } from './shared/components/footer/footer.component';
import { SidebarModule } from './shared/components/sidebar/sidebar.module';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';

// Para componente de horario-atención --> MatIconModule, BrowserAnimationsModule
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { HorariosAtencionComponent } from './modules/horarios-atencion/horarios-atencion.component';
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

import {FileUploadModule} from 'primeng/fileupload';
import { CreateProjectComponent } from './pages/create-project/create-project.component';
import { EditorModule } from 'primeng/editor';
import { InputMaskModule } from 'primeng/inputmask';
import { DropdownModule } from 'primeng/dropdown';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { appReducer } from './data/app.state';
import { AuthEffects } from './data/auth/auth.effects';






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
    CreateProjectComponent,
    ProjectsCatalogComponent,
    ProjectDetailsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    MaterialModule,
    SidebarModule,
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    HttpClientModule,
    MatButtonModule,
    MatTableModule,
    MatSlideToggleModule,
    MatChipsModule,
    MatDialogModule,
    ReactiveFormsModule,
    SweetAlert2Module,
    HttpClientModule,
    FileUploadModule,
    EditorModule,
    InputMaskModule,
    DropdownModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([AuthEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),


  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
