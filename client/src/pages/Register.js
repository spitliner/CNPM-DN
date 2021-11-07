import React, { Component } from "react";
import RegisterForm from "../components/RegisterForm";

class Register extends React.Component {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  render() {
    return (
      <React.Fragment>
        <h1>Register</h1>
        <RegisterForm />
      </React.Fragment>
    );
  }
}

export default Register;
