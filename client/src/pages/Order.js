import React, { Component } from "react";
import { CartContext } from "../context/Cart";

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

const exampleCartItems = [
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
];

var orderList = [
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
];

class DisplayOrderDish extends React.Component{
  render() {
    return (
      <div class='dish_display_box'>
        <div class='dish_image_display'>
          <img class="dish_image" source={this.props.dishOrder.imgUrl} />
        </div>
        <div class='dish_name'>
          <p>{this.props.dishOrder.name}</p>
        </div>
        <div class='dish_quanity'>
          <p>{this.props.dishOrder.quantity}</p>
        </div>
        <div class='dish_price'>
          <p>{this.props.dishOrder.pricePU}</p>
        </div>
      </div>
    );
  }
}

class OrderDish extends React.Component {
  render() {
    return (
      <>
      {orderList.map((dish) => {
        return <DisplayOrderDish dishOrder={dish}/>;
      })}
      </>
    )  
  }
}

function getTotal(FoodOrder)
{
  var total = 0;
  for (var i in FoodOrder)
  {
    total = FoodOrder[i].pricePU*FoodOrder[i].quantity + total;
  }
  return total;
}

class OrderMain extends React.Component {
  render() {
    return (
      <div class="order">
        <h1>Your Current Order</h1>
        <div class="order_main">
          <div class="order_header">
            <div class='dish_image_display'></div>
            <div class='dish_name'>Food Name</div>
            <div class='dish_quanity'>Quantities</div>
            <div class='dish_price'>Price Per Unit</div>
          </div>
          <OrderDish list={orderList} />
          <div class="order_header">
            <div class='dish_image_display'></div>
            <div class='dish_name'></div>
            <div class='dish_quanity'>Totals Cost</div>
            <div class='dish_price'>{getTotal(orderList).toFixed(2)}</div>
          </div>
        </div>
        </div>
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
              <button
                onClick={() => {
                  addItemToCart(menuItems[0]);
                }}
              >
                Add Item 0
              </button>
              <button
                onClick={() => {
                  addItemToCart(menuItems[1]);
                }}
              >
                Add Item 1
              </button>
              <button
                onClick={() => {
                  addItemToCart(menuItems[2]);
                }}
              >
                Add Item 2
              </button>
              <button
                onClick={() => {
                  reduceItemFromCart(menuItems[0]);
                }}
              >
                Remove Item 0
              </button>
              <button
                onClick={() => {
                  reduceItemFromCart(menuItems[1]);
                }}
              >
                Remove Item 1
              </button>
              <button
                onClick={() => {
                  reduceItemFromCart(menuItems[2]);
                }}
              >
                Remove Item 2
              </button>
              <h1>Your Order</h1>
            </div>
          );
        }}
      </CartContext.Consumer>
    );
  }
}

export default Order;
