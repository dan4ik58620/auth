import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {
  registerSuccess,
  loginSuccess,
  logOutSuccess,
  currentSuccess,
} from "./actions";


const initState = { name: "", email: "", password: "" };

const user = createReducer(initState, {
  [registerSuccess]: (_, action) => action.payload.user,
  [loginSuccess]: (_, action) => action.payload.user,
  [logOutSuccess]: () => initState,
  [currentSuccess]: (_, action) => action.payload,
});

export default combineReducers({ user });
