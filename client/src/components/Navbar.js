import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <h1>Navbar Header</h1>
        <nav>
          <ul>
            <li>
              <Link to="/menu/1">Menu Detail</Link>
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
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
