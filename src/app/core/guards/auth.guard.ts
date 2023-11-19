import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs';
import { AppState } from 'src/app/data/app.state';
import { isAuthenticated } from 'src/app/data/auth/auth.selector';

export const authGuard: CanActivateFn = (route, state) => {
  const store = inject(Store<AppState>);
  const router = inject(Router);
  const islog = store.select(isAuthenticated);
  return islog.pipe(
    tap((isLogged) => {
      if (!isLogged) {
         router.navigate(['/login']);
      }
    })
  );
};
