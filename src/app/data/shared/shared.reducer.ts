import { createReducer, on } from '@ngrx/store';
import { initialState } from './shared.state';
import { isLoading, isLoadingButton } from './shared.action';

export const _sharedReducer = createReducer(
  initialState,
  on(isLoading, (state, action) => {
    return {
      ...state,
      isLoading: action.isLoading,
    };
  }),
  on(isLoadingButton, (state, action) => {
    return {
      ...state,
      isLoadingButton: action.isLoadingButton,
    };
  }),
);
