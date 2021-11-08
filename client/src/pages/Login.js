import React, { Component } from "react";
import LoginForm from "../components/LoginForm";

class Login extends React.Component {
  render() {
    const { loginUser } = this.props;
    return (
      <React.Fragment>
        <LoginForm onUserLogin={loginUser} />
      </React.Fragment>
    );
  }
}

export default Login;
