import React from "react";
import classes from "./AuthPage.module.css";
import { NavLink } from "react-router-dom";

const AuthPage = () => {
  return (
    <>
      <div>
        <NavLink to="/login">login</NavLink>
        <NavLink to="/register">register</NavLink>
      </div>
    </>
  );
};

export default AuthPage;
