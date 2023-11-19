import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '@app/core/components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { SharedModule } from '@app/shared/shared.module';
import { SideMenuBarComponent } from './components/side-menu-bar/side-menu-bar.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [LoginComponent, SideMenuBarComponent, HomeComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    RouterModule
  ],
  providers: [CookieService],
  exports: [LoginComponent, SideMenuBarComponent]
})
export class CoreModule { }
