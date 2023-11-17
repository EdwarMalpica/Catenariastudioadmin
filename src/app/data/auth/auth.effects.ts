import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { ApiService } from 'src/app/core/services/api.service';
import { autoLogin, isLoadingLogin, loginStart, loginSuccess, logout } from './auth.action';
import { of } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { AlertsService } from 'src/app/shared/services/alerts.service';
import { isLoading } from '../shared/shared.action';
import { URL_API_LOGIN } from '../constants/constants';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private apiService: ApiService,
    private authService: AuthService,
    private store: Store<AppState>,
    private alerts: AlertsService
  ) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginStart),
      exhaustMap((action) => {
        console.log('fui llamado dentro del effect');

        return this.apiService.post(URL_API_LOGIN, action.data).pipe(
          map((data: any) => {
            this.alerts.showSuccess('Inicio de Sesión Exitoso');
            const user = {
              id: data.user.id,
              name: data.user.name,
              email: data.user.email,
              nombres: data.user.detalle.nombres,
              apellidos: data.user.detalle.apellidos,
              fecha_nacimiento: data.user.detalle.fecha_nacimiento,
              numero_telefonico: data.user.detalle.numero_telefonico,
            };
            this.store.dispatch(isLoadingLogin({ isLoading: false }));
            return loginSuccess({ token: data.token, user: user });
          }),
          catchError((error) => {
            this.alerts.showError(error.error.message);
            this.store.dispatch(isLoadingLogin({ isLoading: false }));
            return of();
          })
        );
      })
    )
  );

  $saveToken = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginSuccess),
        map((action) => {
          this.authService.saveUser(action.user);
          this.authService.saveToken(action.token);
          return action;
        })
      ),
    { dispatch: false }
  );

  $autoLogin = createEffect(() =>
    this.actions$.pipe(
      ofType(autoLogin),
      map((action) => {
        const token = this.authService.getToken();
        const user = this.authService.getUser();

        if (token && user) {
          return loginSuccess({ token: token, user: user });
        }
        return isLoading({ isLoading: false });
      })
    )
  );

  $logout = createEffect(
    () =>
      this.actions$.pipe(
        ofType(logout),
        map((action) => {
          this.authService.logout();
          return action;
        })
      ),
    { dispatch: false }
  );
}
