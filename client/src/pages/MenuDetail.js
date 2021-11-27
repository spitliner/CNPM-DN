import React, { Component } from "react";
import "./MenuDetail.css";
import { CartContext } from "../context/Cart";

const menuItems = [
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
];

function PostItem(props) {
  return (
    <div className="post-item">
      <h2 className="post-name"> {props.food_name}</h2>
      <button
        class="post-button-BTM"
        type="submit"
        onClick={() => {
          props.history.push("/menu");
        }}
      >
        Back To Menu
      </button>
      <div>
        <img className="post-img" src={props.image} />
      </div>
      <h2 className="post-Ingredient">Ingredient</h2>
      <p className="post-desc">{props.food_description}</p>
      <h3 className="post-price">Prices: &nbsp; {props.food_price}$</h3>
      {props.cookies.get("user") && (
        <button
          onClick={() => {
            props.addItemToCart(menuItems[props.id]);
            props.history.push("/menu");
          }}
          className="post-button-ATC"
        >
          Add To Cart
        </button>
      )}
    </div>
  );
}

class MenuDetail extends React.Component {
  render() {
    const { history, match, location, cookies } = this.props;

    const id = match.params.id;

    const itemIndex = menuItems.findIndex((item) => item.id == id);

    return (
      <CartContext.Consumer>
        {({ cartItems, addItemToCart, reduceItemFromCart }) => {
          return (
            <div>
              <PostItem
                key={menuItems[itemIndex].id}
                id={id}
                food_name={menuItems[itemIndex].name}
                image={menuItems[itemIndex].imgUrl}
                food_description={menuItems[itemIndex].description}
                food_price={menuItems[itemIndex].pricePU}
                history={history}
                addItemToCart={addItemToCart}
                cookies={this.props.cookies}
              />
              <div>Comment</div>
            </div>
          );
        }}
      </CartContext.Consumer>
    );
  }
}

export default MenuDetail;
