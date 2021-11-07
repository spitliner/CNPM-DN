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
    user: [],
    product: [
      {
        id: 1,
        name: "Fishball",
        imgUrl: "",
        price: "",
        quantity: 0,
      },
      {},
      {},
    ],
  };

  render = () => {
    return (
      <Router>
        <div>
          <Navbar />
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/menu/:id">
              <MenuDetail />
            </Route>
            <Route path="/menu">
              <Menu />
            </Route>
            <Route path="/account">
              <AccountInfo />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/order">
              <Order />
            </Route>
            <Route path="/reservation">
              <Reservation />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  };
}

export default App;
