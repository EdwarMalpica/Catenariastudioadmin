import {  createReducer, on } from '@ngrx/store';
import { initialState } from './auth.state';
import { isLoadingLogin, loginSuccess, logout } from './auth.action';



export const _authReducer = createReducer(
  initialState,
  on(loginSuccess, (state, action) => {
    return {
      ...state,
      token: action.token,
      error: '',
      user: action.user,
      isLoading: false,
    };
  }),
  on(isLoadingLogin, (state, action) => {
    return {
      ...state,
      isLoading: action.isLoading,
    };
  }),
  on(logout, (state, action) => {
    return {
      ...state,
      token: '',
      error: '',
      user: {
        id: 0,
        name: '',
        email: '',
        nombres: '',
        apellidos: '',
        fecha_nacimiento: '',
        numero_telefonico: '',
      },
    };
  })
);

