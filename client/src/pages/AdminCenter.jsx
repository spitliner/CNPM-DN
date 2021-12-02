import React, { Component } from "react";
import { UserContext } from "../context/User";
import "./AccountInfo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../icons/fontawesome";
import {
  faEnvelope,
  faMapMarkedAlt,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

class AdminCenter extends React.Component {
  handleVerifyEmailButton = () => {
    this.props.history.push("/verify_email");
  };
  handleEditMenuButton = () => {
    this.props.history.push("/admin/menu");
  };
  componentDidMount = () => {
    window.scrollTo(0, 0);
  };
  render() {
    return (
      <UserContext.Consumer>
        {({ currentLoginUser }) => {
          return (
            currentLoginUser.username !== "" && (
              <div className="account-background">
                <div className="account-info-wrapper">
                  <ul>
                    <li>
                      <h1>Admininstrator Center</h1>
                    </li>
                    <li>
                      <div className="information-icon">
                        <FontAwesomeIcon icon={faUser} />
                      </div>
                      <div className="information-content">
                        Name: {currentLoginUser.username}
                      </div>
                    </li>
                    <li>
                      <div className="information-icon">
                        <FontAwesomeIcon icon={faEnvelope} />
                      </div>
                      <div className="information-content">
                        Email: {currentLoginUser.email}
                      </div>
                    </li>
                    <li>
                      <div className="information-icon">
                        <FontAwesomeIcon icon={faPhone} />
                      </div>
                      <div className="information-content">
                        Phone number: {currentLoginUser.phone}
                      </div>
                    </li>
                    <li>
                      <div className="information-icon">
                        <FontAwesomeIcon icon={faMapMarkedAlt} />
                      </div>
                      <div className="information-content">
                        Address: {currentLoginUser.address}
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="change-button-wrapper">
                  {!currentLoginUser.verifyEmail && (
                    <button
                      className="post-button-ATC"
                      onClick={this.handleVerifyEmailButton}
                    >
                      Verify Your Email
                    </button>
                  )}
                  <button
                    className="post-button-ATC"
                    onClick={this.handleEditMenuButton}
                  >
                    Edit Restaurant Menu
                  </button>
                </div>
              </div>
            )
          );
        }}
      </UserContext.Consumer>
    );
  }
}

export default AdminCenter;
