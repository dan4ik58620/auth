import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {
  registerSuccess,
  loginSuccess,
  logOutSuccess,
  currentSuccess,
  registerError,
  loginError,
  logOutError,
  currentError,
} from "./actions";

const initState = { name: null, email: null, password: null };

const user = createReducer(initState, {
  [registerSuccess]: (_, action) => action.payload.user,
  [loginSuccess]: (_, action) => action.payload.user,
  [logOutSuccess]: () => initState,
  [currentSuccess]: (_, action) => action.payload,
});

const token = createReducer(null, {
  [registerSuccess]: (_, action) => action.payload.token,
  [loginSuccess]: (_, action) => action.payload.token,
  [logOutSuccess]: () => null,
});

const error = createReducer(null, {
  [registerError]: (_, action) => action.payload,
  [loginError]: (_, action) => action.payload,
  [logOutError]: (_, action) => action.payload,
  [currentError]: (_, action) => action.payload,
});

export default combineReducers({
  user,
  token,
  error,
});
