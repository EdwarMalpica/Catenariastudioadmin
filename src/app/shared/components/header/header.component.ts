import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AppState } from '@app/data/app.state';
import { logout } from '@app/data/auth/auth.action';
import { isAuthenticated } from '@app/data/auth/auth.selector';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isAdmin = false;
  isAuth: Observable<boolean>;
  @Output() toggleSidenav = new EventEmitter<void>();
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.isAuth = this.store.select(isAuthenticated);
  }

  onToggleSidenav(): void {
    this.toggleSidenav.emit();
  }

  logout() {
    this.store.dispatch(logout());
  }
}
