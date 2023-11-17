import { createAction, props } from '@ngrx/store';
import { User } from './auth.state';

export const LOGIN_START = '[Auth] User Login';
export const LOGIN_SUCCESS = '[Auth] Login Success';
export const LOGIN_FAIL = '[Auth] Login Failure';
export const AUTO_LOGIN_ACTION = '[Auth] Auto Login';
export const LOGOUT_ACTION = '[Auth] Logout';
export const IS_LOADING_LOGIN = '[Auth] Is Loading Login';

export const loginStart = createAction(
  LOGIN_START,
  props<{
    data: {
      email: string;
      password: string;
    };
  }>()
);

export const isLoadingLogin = createAction(
  IS_LOADING_LOGIN,
  props<{ isLoading: boolean }>()
);

export const loginSuccess = createAction(
  LOGIN_SUCCESS,
  props<{ token: string, user: User }>()
);

export const loginFail = createAction(
  LOGIN_FAIL,
  props<{ error: string }>()
);

export const autoLogin = createAction(AUTO_LOGIN_ACTION);
export const logout = createAction(LOGOUT_ACTION);

