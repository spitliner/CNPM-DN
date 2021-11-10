import React, { Component } from "react";
import Form from "../common/form";
import Joi from "joi-browser";
import "./LoginForm.css";
import Axios from "axios";
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

  doSubmit = async () => {
    // POST to server by axios call
    var response = await Axios({
      method: "POST",
      data: {
        email: this.state.data.email,
        password: this.state.data.password,
      },
      withCredentials: true,
      url: "http://localhost:4000/api/login", // Should set to .ENV or DEFINE CONST
    });
    if (response.data.user == null) alert("Fail");
    else alert("OK");
    // Check status code:
    // 404 fail, data = []
    // 200 success, data =
    // success: update global account name
    this.props.onUserLogin(this.state);
    // console.log(this.state);
  };

  render() {
    return (
      <div className="form-wrapper">
        <h1 className="form-title"> Member Login Page </h1>{" "}
        <form className="form-body" onSubmit={this.handleSumbit}>
          {" "}
          {this.renderInput("email", "Email")}{" "}
          {this.renderInput("password", "Password", "password")}{" "}
          {/* Since this.validateProperty has setState({}), every time some input in form changed, the form rerender, this.validate() fires to return updated value */}{" "}
          {this.renderButton("Login")}{" "}
        </form>{" "}
      </div>
    );
  }
}

export default LoginForm;
