import React, { Component } from "react";
import { UserContext } from "../context/User";
import "./AccountInfo.css";

class AccountInfo extends React.Component {
  handleChangePasswordButton = () => {
    this.props.history.push("/change_password");
  };
  handleChangeInformationButton = () => {
    this.props.history.push("/change_information");
  };
  render() {
    return (
      <UserContext>
        {({ currentLoginUser }) => {
          return (
            currentLoginUser.username !== "" && (
              <div>
                <div className="account-info-wrapper">
                  <ul>
                    <li>
                      <h1>Your information</h1>
                    </li>
                    <li>Name: {currentLoginUser.username}</li>
                    <li>Email: {currentLoginUser.email}</li>
                    <li>Phone number: {currentLoginUser.phone}</li>
                    <li>Address: {currentLoginUser.address}</li>
                  </ul>
                </div>
                <div className="change-button-wrapper">
                  <button
                    className="post-button-ATC"
                    onClick={this.handleChangePasswordButton}
                  >
                    Change Password
                  </button>
                  <button
                    className="post-button-ATC"
                    onClick={this.handleChangeInformationButton}
                  >
                    Change Infomation
                  </button>
                </div>
              </div>
            )
          );
        }}
      </UserContext>
    );
  }
}

export default AccountInfo;
