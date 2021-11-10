import React, { Component } from "react";
import RegisterForm from "../components/RegisterForm";
import { UserContext } from "../context/User";

class Register extends React.Component {
  state = {};

  render() {
    return (
      <UserContext.Consumer>
        {({ registerUser }) => {
          return (
            <RegisterForm
              history={this.props.history}
              onUserRegister={registerUser}
            />
          );
        }}
      </UserContext.Consumer>
    );
  }
}

export default Register;
