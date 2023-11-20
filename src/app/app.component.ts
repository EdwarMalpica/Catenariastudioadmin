import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './data/app.state';
import { autoLogin } from './data/auth/auth.action';
import { getIsLoading } from './data/shared/shared.selector';
import { isAuthenticated } from './data/auth/auth.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'CatenariaStudioAdmin';
  isLoading: Observable<boolean>;
  isAuth: Observable<boolean>;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(autoLogin());
    this.isLoading = this.store.select(getIsLoading);
    this.isAuth = this.store.select(isAuthenticated);
  }
}
