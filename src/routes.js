import { lazy } from "react";
import {v4 as uuid} from "uuid"

const AuthPage = lazy(() => {
  return import("./pages/AuthPage/AuthPage");
});

const RegisterPage = lazy(() => {
  return import("./pages/RegisterPage/RegisterPage");
});

const LoginPage = lazy(() => {
  return import("./pages/LoginPage/LoginPage");
});

const routes = [
  {
    exact: true,
    path: "/",
    component: AuthPage ,
    key: uuid(),
  },
  {
    exact: true,
    path: "/register",
    component: RegisterPage ,
    key: uuid(),
  },
  {
    exact: true,
    path: "/login",
    component: LoginPage ,
    key: uuid(),
  }
]

export default routes;