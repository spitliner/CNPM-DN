import React, { Component } from "react";
import Form from "../common/form";
import Joi from "joi-browser";
import "./LoginForm.css";

class LoginForm extends Form {
  constructor(props) {
    super(props);
    this.state = {
      data: { email: "", password: "" },
      errors: {},
    };
  }

  schema = {
    email: Joi.string().required().email().label("Email"),
    password: Joi.string().required().min(5).label("Password"),
  };

  doSubmit = () => {
    // Call the server, axios to backend
    // success: update global account name
    this.props.onUserLogin(this.state);
    // console.log(this.state);
    alert("Register");
  };

  render() {
    return (
      <div className="form-wrapper">
        <h1 className="form-title">Member Login Page</h1>
        <form className="form-body" onSubmit={this.handleSumbit}>
          {this.renderInput("email", "Email")}
          {this.renderInput("password", "Password", "password")}
          {/* Since this.validateProperty has setState({}), every time some input in form changed, the form rerender, this.validate() fires to return updated value */}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
