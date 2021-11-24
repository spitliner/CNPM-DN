import React, { Component } from "react";
import { UserContext } from "../context/User";
import "./AccountInfo.css";

class AccountInfo extends React.Component {
  render() {
    return (
      <UserContext>
        {({ currentLoginUser }) => {
          return (
            currentLoginUser.username !== "" && (
              <div className="account-info-wrapper">
                <ul>
                  <li>
                    <h1>Your account info</h1>
                  </li>
                  <li>Username: {currentLoginUser.username}</li>
                  <li>Email: {currentLoginUser.email}</li>
                  <li>Phone number: {currentLoginUser.phone}</li>
                  <li>Address: {currentLoginUser.address}</li>
                </ul>
              </div>
            )
          );
        }}
      </UserContext>
    );
  }
}

export default AccountInfo;
