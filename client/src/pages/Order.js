import React, { Component } from "react";
import { CartContext } from "../context/Cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Order.css";
import "../icons/fontawesome";

const menuItems = [
  {
    id: 1,
    imgUrl:
      "https://media.ex-cdn.com/EXP/media.vntravellive.com/files/editor1/2018/12/07/5517-di-dau-de-tim-thay-pizza-ngon-nhat-105446.jpg",
    name: "PIZZA MIXED",
    category: "PIZZA",
    pricePU: 4.8,
  },
  {
    id: 2,
    imgUrl:
      "https://media.ex-cdn.com/EXP/media.vntravellive.com/files/editor1/2018/12/07/5517-di-dau-de-tim-thay-pizza-ngon-nhat-105446.jpg",
    name: "PIZZA MIXED",
    category: "PIZZA",
    pricePU: 4.8,
  },
  {
    id: 3,
    imgUrl:
      "https://media.ex-cdn.com/EXP/media.vntravellive.com/files/editor1/2018/12/07/5517-di-dau-de-tim-thay-pizza-ngon-nhat-105446.jpg",
    name: "PIZZA MIXED",
    category: "PIZZA",
    pricePU: 4.8,
  },
  {
    id: 4,
    imgUrl:
      "https://media.ex-cdn.com/EXP/media.vntravellive.com/files/editor1/2018/12/07/5517-di-dau-de-tim-thay-pizza-ngon-nhat-105446.jpg",
    name: "PIZZA MIXED",
    category: "PIZZA",
    pricePU: 4.8,
  },
  {
    id: 5,
    imgUrl:
      "https://media.ex-cdn.com/EXP/media.vntravellive.com/files/editor1/2018/12/07/5517-di-dau-de-tim-thay-pizza-ngon-nhat-105446.jpg",
    name: "PIZZA MIXED",
    category: "PIZZA",
    pricePU: 4.8,
  },
  {
    id: 6,
    imgUrl: "http://farm1.staticflickr.com/955/41117503084_128499c414.jpg",
    name: "BURGER MIXED",
    category: "BURGER",
    pricePU: 4.8,
  },
  {
    id: 7,
    imgUrl: "http://farm1.staticflickr.com/955/41117503084_128499c414.jpg",
    name: "BURGER MIXED",
    category: "BURGER",
    pricePU: 4.8,
  },
  {
    id: 8,
    imgUrl: "http://farm1.staticflickr.com/955/41117503084_128499c414.jpg",
    name: "BURGER MIXED",
    category: "BURGER",
    pricePU: 4.8,
  },
  {
    id: 9,
    imgUrl: "http://farm1.staticflickr.com/955/41117503084_128499c414.jpg",
    name: "BURGER MIXED",
    category: "BURGER",
    pricePU: 4.8,
  },
  {
    id: 10,
    imgUrl: "http://farm1.staticflickr.com/955/41117503084_128499c414.jpg",
    name: "BURGER MIXED",
    category: "BURGER",
    pricePU: 4.8,
  },
  {
    id: 11,
    imgUrl:
      "https://images.startsat60.com/wp-content/uploads/20150801171559/310715_pumpkin_soup-500x281.jpg",
    name: "SOUP MIXED",
    category: "SOUP",
    pricePU: 4.8,
  },
  {
    id: 12,
    imgUrl:
      "https://images.startsat60.com/wp-content/uploads/20150801171559/310715_pumpkin_soup-500x281.jpg",
    name: "SOUP MIXED",
    category: "SOUP",
    pricePU: 4.8,
  },
  {
    id: 13,
    imgUrl:
      "https://images.startsat60.com/wp-content/uploads/20150801171559/310715_pumpkin_soup-500x281.jpg",
    name: "SOUP MIXED",
    category: "SOUP",
    pricePU: 4.8,
  },
  {
    id: 14,
    imgUrl:
      "https://images.startsat60.com/wp-content/uploads/20150801171559/310715_pumpkin_soup-500x281.jpg",
    name: "SOUP MIXED",
    category: "SOUP",
    pricePU: 4.8,
  },
  {
    id: 15,
    imgUrl:
      "https://images.startsat60.com/wp-content/uploads/20150801171559/310715_pumpkin_soup-500x281.jpg",
    name: "SOUP MIXED",
    category: "SOUP",
    pricePU: 4.8,
  },
  {
    id: 16,
    imgUrl:
      "https://nghekhachsan.com/upload/Ni-Anh-NKS/Nam-2019/Thang-11/cong-thuc-pha-tra-dao-01.jpg",
    name: "PEACH TEA",
    category: "TEA",
    pricePU: 4.8,
  },
  {
    id: 17,
    imgUrl:
      "https://nghekhachsan.com/upload/Ni-Anh-NKS/Nam-2019/Thang-11/cong-thuc-pha-tra-dao-01.jpg",
    name: "PEACH TEA",
    category: "TEA",
    pricePU: 4.8,
  },
  {
    id: 18,
    imgUrl:
      "https://nghekhachsan.com/upload/Ni-Anh-NKS/Nam-2019/Thang-11/cong-thuc-pha-tra-dao-01.jpg",
    name: "PEACH TEA",
    category: "TEA",
    pricePU: 4.8,
  },
  {
    id: 19,
    imgUrl:
      "https://nghekhachsan.com/upload/Ni-Anh-NKS/Nam-2019/Thang-11/cong-thuc-pha-tra-dao-01.jpg",
    name: "PEACH TEA",
    category: "TEA",
    pricePU: 4.8,
  },
  {
    id: 20,
    imgUrl:
      "https://nghekhachsan.com/upload/Ni-Anh-NKS/Nam-2019/Thang-11/cong-thuc-pha-tra-dao-01.jpg",
    name: "PEACH TEA",
    category: "TEA",
    pricePU: 4.8,
  },
  {
    id: 21,
    imgUrl:
      "https://hallmark.brightspotcdn.com/dims4/default/5beba82/2147483647/strip/true/crop/500x281+0+0/resize/1140x640!/quality/90/?url=http%3A%2F%2Fhallmark-channel-brightspot.s3.amazonaws.com%2Fa2%2F24%2Fc5371a577db4a441383a914b79b8%2Fhf-ep2111-product-cristina-cooks.jpg",
    name: "CAKE",
    category: "OTHER",
    pricePU: 4.8,
  },
  {
    id: 22,
    imgUrl:
      "https://www.cookingpanda.com/wp-content/uploads/2021/04/0004_16x9_CandyCookieCake-500x281.jpg",
    name: "COFFEE CAKE",
    category: "OTHER",
    pricePU: 4.8,
  },
  {
    id: 23,
    imgUrl:
      "https://jandatri.com/wp-content/uploads/2019/02/Black-Forest-Cake-Slice-500x281.jpg",
    name: "TIRAMISU CAKE",
    category: "OTHER",
    pricePU: 4.8,
  },
  {
    id: 24,
    imgUrl:
      "https://i.ndtvimg.com/i/2016-04/granola-parfait-625_625x350_41459499249.jpg",
    name: "STRAWBERRY ICE-DREAM",
    category: "OTHER",
    pricePU: 4.8,
  },
  {
    id: 25,
    imgUrl:
      "https://i.ndtvimg.com/i/2016-04/granola-parfait-625_625x350_41459499249.jpg",
    name: "STRAWBERRY ICE-DREAM",
    category: "OTHER",
    pricePU: 4.8,
  },
];

class OrderDish extends React.Component {
  componentDidMount = () => {
    console.log(this.props.cartItems);
  };

  render() {
    const { cartItems, addItemToCart, reduceItemFromCart } = this.props;

    return (
      <div>
        {cartItems.map((dish) => {
          return (
            <div key={dish.id} className="dish_display_box">
              <div className="dish_id">
                <p>{dish.id}</p>
              </div>
              <div className="dish_image_display">
                <img className="dish_image" source={dish.imgUrl} />
              </div>
              <div className="dish_name">
                <p>{dish.name}</p>
              </div>
              <div className="dish_btn">
                <FontAwesomeIcon
                  icon="plus-circle"
                  onClick={() => addItemToCart(dish)}
                />
              </div>
              <div className="dish_quanity">
                <p>{dish.quantity}</p>
              </div>
              <div className="dish_btn">
                <FontAwesomeIcon
                  icon="minus-circle"
                  onClick={() => reduceItemFromCart(dish)}
                />
              </div>
              <div className="dish_price">
                <p>{dish.pricePU}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

class OrderMain extends React.Component {
  render() {
    const { cartItems } = this.props;

    return (
      <CartContext.Consumer>
        {({ cartItems, addItemToCart, reduceItemFromCart, totalCost }) => {
          if (totalCost === 0) {
            return <h1 className="alert-message">Please make your order !</h1>;
          } else {
            return (
              totalCost !== 0 && (
                <div className="order">
                  <h1>Your Current Order</h1>
                  <div className="order_main">
                    <div className="order_header">
                      <div className="dish_id">Food Id</div>
                      <div className="dish_image_display"></div>
                      <div className="dish_name">Food Name</div>
                      <div className="dish_btn"></div>
                      <div className="dish_quanity">Quantities</div>
                      <div className="dish_btn"></div>
                      <div className="dish_price">Price Per Unit</div>
                    </div>
                    <OrderDish
                      addItemToCart={addItemToCart}
                      reduceItemFromCart={reduceItemFromCart}
                      cartItems={cartItems}
                    />
                    <div className="order_header">
                      <div className="dish_image_display"></div>
                      <div className="dish_name"></div>
                      <div className="dish_quanity">Totals Cost</div>
                      <div className="dish_price">{totalCost.toFixed(2)}</div>
                    </div>
                    <div className="payment">
                      <div className="payment_text">
                        <h1>Finish Payment</h1>
                      </div>
                      <button
                        className="confirm-btn"
                        onClick={() => {
                          this.props.history.push("/payment");
                        }}
                      >
                        Proceed Payment
                      </button>
                    </div>
                  </div>
                </div>
              )
            );
          }
        }}
      </CartContext.Consumer>
    );
  }
}

class Order extends React.Component {
  render() {
    return (
      <CartContext.Consumer>
        {({ cartItems, addItemToCart, reduceItemFromCart }) => {
          return (
            <div>
              <OrderMain history={this.props.history} cartItems={cartItems} />
            </div>
          );
        }}
      </CartContext.Consumer>
    );
  }
}

export default Order;
