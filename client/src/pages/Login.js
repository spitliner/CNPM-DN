import React, { Component } from "react";
import LoginForm from "../components/LoginForm";
import { UserContext } from "../context/User";

class Login extends React.Component {
  render() {
    return (
      <UserContext.Consumer>
        {({ loginUser }) => {
          return (
            <LoginForm history={this.props.history} onUserLogin={loginUser} />
          );
        }}
      </UserContext.Consumer>
    );
  }
}

export default Login;
