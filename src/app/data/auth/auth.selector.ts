import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "./auth.state";

export const AUTH_STATE_NAME = 'auth';

const getAuthState = createFeatureSelector<AuthState>(AUTH_STATE_NAME);

export const isAuthenticated = createSelector(getAuthState, (state) => {
  return !!state.token;
});

export const getIsLoadingLogin = createSelector(getAuthState, (state) => {
  return state.isLoading;
});

export const getToken = createSelector(getAuthState, (state) => {
  return state.token ? state.token : '';
});

export const getUser = createSelector(getAuthState, (state) => {
  return state.user;
});
