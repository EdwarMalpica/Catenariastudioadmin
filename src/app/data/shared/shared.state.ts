export interface SharedState{
  isLoading: boolean;
  isLoadingButton: boolean;
}

export const initialState: SharedState = {
  isLoading: false,
  isLoadingButton: false,
};
