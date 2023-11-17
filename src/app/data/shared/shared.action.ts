import { createAction, props } from "@ngrx/store";

export const IS_LOADING = '[Shared] Is Loading';
export const IS_LOADING_BUTTON = '[Shared] Is Loading Button';
export const isLoading = createAction(
  IS_LOADING,
  props<{ isLoading: boolean }>()
);
export const isLoadingButton = createAction(
  IS_LOADING_BUTTON,
  props<{ isLoadingButton: boolean }>()
);
