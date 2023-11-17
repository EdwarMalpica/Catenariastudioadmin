import { AuthState } from "./auth/auth.state";
import { _authReducer } from "./auth/auth.reducer";
import { AUTH_STATE_NAME } from "./auth/auth.selector";
import { SHARED_STATE_NAME } from "./shared/shared.selector";
import { _sharedReducer } from "./shared/shared.reducer";
import { SharedState } from "./shared/shared.state";

export interface AppState{
  [AUTH_STATE_NAME]: AuthState
  [SHARED_STATE_NAME]: SharedState
};

export const appReducer = ({
  [AUTH_STATE_NAME]: _authReducer,
  [SHARED_STATE_NAME]: _sharedReducer
});
