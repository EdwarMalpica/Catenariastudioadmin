import { createFeatureSelector, createSelector } from "@ngrx/store";
import { SharedState } from "./shared.state";

export const SHARED_STATE_NAME = 'shared';
const getSharedState = createFeatureSelector<SharedState>(SHARED_STATE_NAME);

export const getIsLoading = createSelector(getSharedState, (state) => {
  return state.isLoading;
});
export const getIsLoadingButton = createSelector(getSharedState, (state) => {
  return state.isLoadingButton;
});
