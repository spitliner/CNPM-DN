import React, { Component } from "react";
import RegisterForm from "../components/RegisterForm";

class Register extends React.Component {
  state = {};

  render() {
    const { registerUser } = this.props;

    return (
      <React.Fragment>
        <RegisterForm onUserRegister={this.props.registerUser} />
      </React.Fragment>
    );
  }
}

export default Register;
