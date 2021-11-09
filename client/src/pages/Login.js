import React, { Component } from "react";
import LoginForm from "../components/LoginForm";
import { UserContext } from "../context/User";

class Login extends React.Component {
  render() {
    // const { loginUser } = this.props;
    return (
      <UserContext.Consumer>
        {({ loginUser }) => {
          return (
            <LoginForm history={this.props.history} onUserLogin={loginUser} />
          );
        }}
      </UserContext.Consumer>
      // <LoginForm onUserLogin={loginUser} />
    );
  }
}

export default Login;
