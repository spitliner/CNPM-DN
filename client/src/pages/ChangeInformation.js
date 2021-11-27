import React, { Component } from "react";
import ChangeInformationForm from "../components/ChangeInformationForm";
import { UserContext } from "../context/User";
class ChangeInformation extends React.Component {
  render() {
    return (
      <UserContext.Consumer>
        {({ currentLoginUser }) => {
          return (
            <ChangeInformationForm
              history={this.props.history}
              user={currentLoginUser}
            />
          );
        }}
      </UserContext.Consumer>
    );
  }
}

export default ChangeInformation;
