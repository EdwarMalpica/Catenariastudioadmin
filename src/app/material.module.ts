import { NgModule } from "@angular/core";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';

const cateModules = [
  MatToolbarModule,
  MatSidenavModule,
  MatButtonModule,
  MatMenuModule,
  MatListModule,
  MatInputModule,
  MatCardModule,
  MatIconModule,
  MatTabsModule
];

@NgModule({
  imports: [...cateModules],
  exports: [...cateModules],
})

export class MaterialModule { }
