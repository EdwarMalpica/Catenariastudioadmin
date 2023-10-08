import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { MaterialModule } from '../../../material.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MaterialModule,
    MatFormFieldModule,
    FormsModule
  ]
})
export class LoginModule { }
