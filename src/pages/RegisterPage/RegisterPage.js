import React from "react";
import classes from "./RegisterPage.module.css";
import RegisterForm from "../../components/Register/Register";

const RegisterPage = () => {
  return (
    <>
      <div>
        <h1>Register Page</h1>
        <RegisterForm />
      </div>
    </>
  );
};

export default RegisterPage;
