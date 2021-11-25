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
import { UserContext } from "./context/User";
//import Axios from "axios";
import CartProvider from "./context/Cart";
import "./icons/fontawesome";
import ForgetPassword from "./pages/ForgerPassword";
import ChangePassword from "./pages/ChangePassword";
import ChangeInformation from "./pages/ChangeInformation";

class App extends Component {
  state = {
    menuItems: [
      {
        id: 1,
        imgUrl:
          "https://media.ex-cdn.com/EXP/media.vntravellive.com/files/editor1/2018/12/07/5517-di-dau-de-tim-thay-pizza-ngon-nhat-105446.jpg",
        name: "PIZZA MIXED",
        category: "PIZZA",
        pricePU: 4.8,
        description: "DESSERT",
      },
      {
        id: 2,
        imgUrl:
          "https://media.ex-cdn.com/EXP/media.vntravellive.com/files/editor1/2018/12/07/5517-di-dau-de-tim-thay-pizza-ngon-nhat-105446.jpg",
        name: "PIZZA MIXED",
        category: "PIZZA",
        pricePU: 4.8,
        description: "DESSERT",
      },
      {
        id: 3,
        imgUrl:
          "https://media.ex-cdn.com/EXP/media.vntravellive.com/files/editor1/2018/12/07/5517-di-dau-de-tim-thay-pizza-ngon-nhat-105446.jpg",
        name: "PIZZA MIXED",
        category: "PIZZA",
        pricePU: 4.8,
        description: "DESSERT",
      },
      {
        id: 4,
        imgUrl:
          "https://media.ex-cdn.com/EXP/media.vntravellive.com/files/editor1/2018/12/07/5517-di-dau-de-tim-thay-pizza-ngon-nhat-105446.jpg",
        name: "PIZZA MIXED",
        category: "PIZZA",
        pricePU: 4.8,
        description: "DESSERT",
      },
      {
        id: 5,
        imgUrl:
          "https://media.ex-cdn.com/EXP/media.vntravellive.com/files/editor1/2018/12/07/5517-di-dau-de-tim-thay-pizza-ngon-nhat-105446.jpg",
        name: "PIZZA MIXED",
        category: "PIZZA",
        pricePU: 4.8,
        description: "DESSERT",
      },
      {
        id: 6,
        imgUrl: "http://farm1.staticflickr.com/955/41117503084_128499c414.jpg",
        name: "BURGER MIXED",
        category: "BURGER",
        pricePU: 4.8,
        description: "DESSERT",
      },
      {
        id: 7,
        imgUrl: "http://farm1.staticflickr.com/955/41117503084_128499c414.jpg",
        name: "BURGER MIXED",
        category: "BURGER",
        pricePU: 4.8,
        description: "DESSERT",
      },
      {
        id: 8,
        imgUrl: "http://farm1.staticflickr.com/955/41117503084_128499c414.jpg",
        name: "BURGER MIXED",
        category: "BURGER",
        pricePU: 4.8,
        description: "DESSERT",
      },
      {
        id: 9,
        imgUrl: "http://farm1.staticflickr.com/955/41117503084_128499c414.jpg",
        name: "BURGER MIXED",
        category: "BURGER",
        pricePU: 4.8,
        description: "DESSERT",
      },
      {
        id: 10,
        imgUrl: "http://farm1.staticflickr.com/955/41117503084_128499c414.jpg",
        name: "BURGER MIXED",
        category: "BURGER",
        pricePU: 4.8,
        description: "DESSERT",
      },
      {
        id: 11,
        imgUrl:
          "https://images.startsat60.com/wp-content/uploads/20150801171559/310715_pumpkin_soup-500x281.jpg",
        name: "SOUP MIXED",
        category: "SOUP",
        pricePU: 4.8,
        description: "DESSERT",
      },
      {
        id: 12,
        imgUrl:
          "https://images.startsat60.com/wp-content/uploads/20150801171559/310715_pumpkin_soup-500x281.jpg",
        name: "SOUP MIXED",
        category: "SOUP",
        pricePU: 4.8,
        description: "DESSERT",
      },
      {
        id: 13,
        imgUrl:
          "https://images.startsat60.com/wp-content/uploads/20150801171559/310715_pumpkin_soup-500x281.jpg",
        name: "SOUP MIXED",
        category: "SOUP",
        pricePU: 4.8,
        description: "DESSERT",
      },
      {
        id: 14,
        imgUrl:
          "https://images.startsat60.com/wp-content/uploads/20150801171559/310715_pumpkin_soup-500x281.jpg",
        name: "SOUP MIXED",
        category: "SOUP",
        pricePU: 4.8,
        description: "DESSERT",
      },
      {
        id: 15,
        imgUrl:
          "https://images.startsat60.com/wp-content/uploads/20150801171559/310715_pumpkin_soup-500x281.jpg",
        name: "SOUP MIXED",
        category: "SOUP",
        pricePU: 4.8,
        description: "DESSERT",
      },
      {
        id: 16,
        imgUrl:
          "https://nghekhachsan.com/upload/Ni-Anh-NKS/Nam-2019/Thang-11/cong-thuc-pha-tra-dao-01.jpg",
        name: "PEACH TEA",
        category: "TEA",
        pricePU: 4.8,
        description: "DESSERT",
      },
      {
        id: 17,
        imgUrl:
          "https://nghekhachsan.com/upload/Ni-Anh-NKS/Nam-2019/Thang-11/cong-thuc-pha-tra-dao-01.jpg",
        name: "PEACH TEA",
        category: "TEA",
        pricePU: 4.8,
        description: "DESSERT",
      },
      {
        id: 18,
        imgUrl:
          "https://nghekhachsan.com/upload/Ni-Anh-NKS/Nam-2019/Thang-11/cong-thuc-pha-tra-dao-01.jpg",
        name: "PEACH TEA",
        category: "TEA",
        pricePU: 4.8,
        description: "DESSERT",
      },
      {
        id: 19,
        imgUrl:
          "https://nghekhachsan.com/upload/Ni-Anh-NKS/Nam-2019/Thang-11/cong-thuc-pha-tra-dao-01.jpg",
        name: "PEACH TEA",
        category: "TEA",
        pricePU: 4.8,
        description: "DESSERT",
      },
      {
        id: 20,
        imgUrl:
          "https://nghekhachsan.com/upload/Ni-Anh-NKS/Nam-2019/Thang-11/cong-thuc-pha-tra-dao-01.jpg",
        name: "PEACH TEA",
        category: "TEA",
        pricePU: 4.8,
        description: "DESSERT",
      },
      {
        id: 21,
        imgUrl:
          "https://hallmark.brightspotcdn.com/dims4/default/5beba82/2147483647/strip/true/crop/500x281+0+0/resize/1140x640!/quality/90/?url=http%3A%2F%2Fhallmark-channel-brightspot.s3.amazonaws.com%2Fa2%2F24%2Fc5371a577db4a441383a914b79b8%2Fhf-ep2111-product-cristina-cooks.jpg",
        name: "CAKE",
        category: "OTHER",
        pricePU: 4.8,
        description: "DESSERT",
      },
      {
        id: 22,
        imgUrl:
          "https://www.cookingpanda.com/wp-content/uploads/2021/04/0004_16x9_CandyCookieCake-500x281.jpg",
        name: "COFFEE CAKE",
        category: "OTHER",
        pricePU: 4.8,
        description: "DESSERT",
      },
      {
        id: 23,
        imgUrl:
          "https://jandatri.com/wp-content/uploads/2019/02/Black-Forest-Cake-Slice-500x281.jpg",
        name: "TIRAMISU CAKE",
        category: "OTHER",
        pricePU: 4.8,
        description: "DESSERT",
      },
      {
        id: 24,
        imgUrl:
          "https://i.ndtvimg.com/i/2016-04/granola-parfait-625_625x350_41459499249.jpg",
        name: "STRAWBERRY ICE-DREAM",
        category: "OTHER",
        pricePU: 4.8,
        description: "DESSERT",
      },
      {
        id: 25,
        imgUrl:
          "https://i.ndtvimg.com/i/2016-04/granola-parfait-625_625x350_41459499249.jpg",
        name: "STRAWBERRY ICE-DREAM",
        category: "OTHER",
        pricePU: 4.8,
        description: "DESSERT",
      },
    ],

    cartsItem: [
      {
        id: 23,
        imgUrl:
          "https://jandatri.com/wp-content/uploads/2019/02/Black-Forest-Cake-Slice-500x281.jpg",
        name: "TIRAMISU CAKE",
        category: "OTHER",
        pricePU: 4.8,
        quantity: 2,
      },
      {
        id: 24,
        imgUrl:
          "https://i.ndtvimg.com/i/2016-04/granola-parfait-625_625x350_41459499249.jpg",
        name: "STRAWBERRY ICE-DREAM",
        category: "OTHER",
        pricePU: 4.8,
        quantity: 1,
      },
      {
        id: 25,
        imgUrl:
          "https://i.ndtvimg.com/i/2016-04/granola-parfait-625_625x350_41459499249.jpg",
        name: "STRAWBERRY ICE-DREAM",
        category: "OTHER",
        pricePU: 4.8,
        quantity: 3,
      },
    ],
  };

  handleReservation = (message) => {
    console.log(message);
  };

  render = () => {
    return (
      <CartProvider>
        <div>
          <UserContext.Consumer>
            {({ currentLoginUser, logoutUser }) => {
              return (
                <Navbar
                  currentLoginUser={currentLoginUser}
                  logoutUser={logoutUser}
                  history={this.props.history}
                />
              );
            }}
          </UserContext.Consumer>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route
              path="/menu/:id"
              render={(props) => <MenuDetail {...props} />}
            />
            <Route
              path="/menu"
              render={(props) => (
                <Menu items={this.state.menuItems} {...props} />
              )}
            />
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
              render={(props) => <Register {...props} />}
            />
            <Route path="/order" render={(props) => <Order {...props} />} />
            <Route
              path="/reservation"
              render={(props) => (
                <Reservation
                  {...props}
                  onReservation={this.handleReservation}
                />
              )}
            />
            <Route
              path="/forget_password"
              render={(props) => <ForgetPassword {...props} />}
            />
            <Route
              path="/change_password"
              render={(props) => <ChangePassword {...props} />}
            />
            <Route
              path="/change_information"
              render={(props) => <ChangeInformation {...props} />}
            />
          </Switch>
          <Footer />
        </div>
      </CartProvider>
    );
  };
}

export default App;
