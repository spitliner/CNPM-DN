import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Reservation from "../pages/Reservation";
import "./Navbar.css";
import { withRouter } from "react-router-dom";
import Axios from "axios";
class Navbar extends React.Component {
  handleLogoutUser = async () => {
    const response = await this.props.logoutUser();
    console.log(response);
    if (response.data.success) {
      this.props.history.replace("/login");
    } else alert(response.data.message);
  };

  render() {
    const { currentLoginUser, logoutUser } = this.props;
    return (
      <div>
        <nav className="navbar py-3 navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">
            Restaurant
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              {!(currentLoginUser.username === "") && (
                <li>
                  <Link className="nav-link" to="/order">
                    <i className="bi bi-cart3"></i>
                  </Link>
                </li>
              )}
              <li>
                <Link className="nav-link" to="/menu">
                  Menu
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/reservation">
                  Reservation
                </Link>
              </li>
            </ul>
          </div>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {currentLoginUser.username === "" && (
              <ul className="navbar-nav ml-auto">
                <li>
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                </li>
              </ul>
            )}{" "}
            {!(currentLoginUser.username === "") && (
              <ul className="navbar-nav ml-auto">
                <li>
                  <Link className="nav-link" to="/account">
                    Account
                  </Link>
                </li>
                <li>
                  <a className="nav-link" onClick={this.handleLogoutUser}>
                    Logout
                  </a>
                </li>
              </ul>
            )}
          </div>
        </nav>

        <nav>
          {/* <ul>
          <li>
            <Link to="/menu/1">
              Menu Detail
            </Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/account">Account</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/order">Order</Link>
          </li>
          <li>
            <Link to="/reservation">Reservation</Link>
          </li>
        </ul> */}
        </nav>
      </div>
    );
  }
}

export default withRouter(Navbar);
