import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Register from "./pages/Register";
import Reservation from "./pages/Reservation";
import MenuDetail from "./pages/MenuDetail";
import AccountInfo from "./pages/AccountInfo";
import Order from "./pages/Order";
import Menu from "./pages/Menu";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

class App extends Component {
  state = {
    user: {},
    product: [{}, {}, {}],
  };

  loginUser = (message) => {
    console.log(message);
    // this.setState({ user: userInfo });
  };

  registerUser = (message) => {
    console.log(message);
  };

  render = () => {
    return (
      <Router>
        <div>
          <Navbar />
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route
              path="/menu/:id"
              render={(props) => <MenuDetail {...props} />}
            />
            <Route path="/menu" render={(props) => <Menu {...props} />} />
            <Route
              path="/account"
              render={(props) => <AccountInfo {...props} />}
            />
            <Route
              path="/login"
              render={(props) => (
                <Login {...props} loginUser={this.loginUser} />
              )}
            />
            <Route
              path="/register"
              render={(props) => (
                <Register {...props} registerUser={this.registerUser} />
              )}
            />
            <Route path="/order" render={(props) => <Order {...props} />} />

            <Route
              path="/reservation"
              render={(props) => <Reservation {...props} />}
            />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  };
}

export default App;
