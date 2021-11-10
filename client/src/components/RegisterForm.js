import React, { Component } from "react";
import Form from "../common/form";
import "./RegisterForm.css";
import JoiBase from "joi";
import JoiDate from "@hapi/joi-date";
import { Axios } from "axios";

const Joi = JoiBase.extend(JoiDate); // extend Joi with Joi Date

class RegisterForm extends Form {
  constructor(props) {
    super(props);
    this.state = {
      data: { username: "", email: "", password: "", phone: "", address: "" },
      errors: {},
    };
  }

  schema = Joi.object({
    email: Joi.string()
      .required()
      .email({ tlds: { allow: false } })
      .label("Email"),
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().min(5).label("Password"),
    phone: Joi.string()
      .regex(/^[0-9]{10}$/)
      .required()
      .label("Phone Number")
      .messages({
        "string.pattern.base": "Phone number must be of 10 digits",
      }),
    address: Joi.string().required().label("Address"),
  });

  doSubmit = async () => {
    // Call the server

    // var response = await Axios({
    //   method: "POST",
    //   data: {
    //     email: this.state.data.email,
    //     password: this.state.data.password,
    //     username: this.state.data.username,
    //     address: this.state.data.address,
    //     phone: this.state.data.phone,
    //   },
    //   withCredentials: true,
    //   url: "http://localhost:4000/api/register", // Should set to .ENV or DEFINE CONST
    // });
    // alert(response.data.message);
    this.props.onUserRegister(this.state);
  };

  render() {
    const { onUserRegister } = this.props;

    return (
      <div className="form-wrapper">
        <h1 className="form-title"> Member Register Page </h1>{" "}
        <form className="form-body" onSubmit={this.handleSumbit}>
          {" "}
          {this.renderInput("email", "Email")}{" "}
          {this.renderInput("username", "Name")}{" "}
          {this.renderInput("password", "Password", "password")}{" "}
          {this.renderInput("phone", "Phone")}{" "}
          {this.renderInput("address", "Address")}{" "}
          {/* Since this.validateProperty has setState({}), every time some input in form changed, the form rerender, this.validate() fires to return updated value */}{" "}
          {this.renderButton("Register")}{" "}
        </form>{" "}
      </div>
    );
  }
}

export default RegisterForm;
