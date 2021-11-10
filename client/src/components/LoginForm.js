import React, { Component } from "react";
import Form from "../common/form";
import "./LoginForm.css";
import JoiBase from "joi";
import JoiDate from "@hapi/joi-date";

const Joi = JoiBase.extend(JoiDate); // extend Joi with Joi Date

import Axios from "axios";
class LoginForm extends Form {
  constructor(props) {
    super(props);
    this.state = {
      data: { email: "", password: "" },
      errors: {},
    };
  }

  schema = Joi.object({
    email: Joi.string()
      .required()
      .email({ tlds: { allow: false } })
      .label("Email"),
    password: Joi.string().required().min(5).label("Password"),
  });

  doSubmit = async () => {
    const response = await this.props.onUserLogin(this.state);
    console.log("Login response", response);
    if (response.message === "Login success") {
      this.props.history.replace("/menu");
    } else if (response.message === "Login failed") {
    } else {
      alert("Unknown error message");
    }
    // // POST to server by axios call
    // var response = await Axios({
    //   method: "POST",
    //   data: {
    //     email: this.state.data.email,
    //     password: this.state.data.password,
    //   },
    //   withCredentials: true,
    //   url: "http://localhost:4000/api/login", // Should set to .ENV or DEFINE CONST
    // });
    // if (response.data.user == null) alert("Fail");
    // else alert("OK");
    // // Check status code:
    // // 404 fail, data = []
    // // 200 success, data =
    // // success: update global account name
    // this.props.onUserLogin(this.state);
    // // console.log(this.state);
  };

  render() {
    return (
      <div className="form-wrapper">
        <h1 className="form-title"> Member Login Page </h1>{" "}
        <form className="form-body" onSubmit={this.handleSumbit}>
          {this.renderInput("email", "Email")}
          {this.renderInput("password", "Password", "password")}
          {/* Since this.validateProperty has setState({}), every time some input in form changed, the form rerender, this.validate() fires to return updated value */}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
