import React, { Component } from "react";
import Joi from "joi-browser";
import Register from "../pages/Register";

class RegisterForm extends React.Component {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    email: Joi.string().required().email().label("Email"),
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().min(5).label("Password"),
  };

  doSubmit = () => {
    // Call the server
    alert("Register");
  };

  render() {
    return (
      <div>
        <h1>Register Page</h1>
      </div>
    );
  }
}

export default RegisterForm;
