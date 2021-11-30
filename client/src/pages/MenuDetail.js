import React, { Component } from "react";
import "./MenuDetail.css";
import { CartContext } from "../context/Cart";
import FeedbackForm from "../components/FeedbackForm";

function PostItem(props) {
  var renderStar = (star) => {
    star = Math.floor(star);
    var yellowStar;
    var whiteStar;
    yellowStar = [...Array(star)].map((element, index) => (
      <li className={"menu-detail-star menu-detail-selected"}></li>
    ));
    whiteStar = [...Array(5 - star)].map((element, index) => (
      <li className={"menu-detail-star"}></li>
    ));
    return (
      <ul class="menu-detail-ratings">
        {yellowStar}
        {whiteStar}
      </ul>
    );
  };
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
      <h3 className="post-price">Prices: &nbsp; {props.food_price} $</h3>
      <div className="food-rating-wrapper">
        <h3 className="food-rating-title">Rating: </h3>
        <div className="food-rating-star">{renderStar(props.star)}</div>
      </div>
      {props.cookies.get("user") && (
        <button
          onClick={() => {
            props.addItemToCart(props.menuItems[props.id]);
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
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const { history, match, location, cookies, menuItems } = this.props;
    const id = match.params.id;
    const itemIndex = menuItems.findIndex((item) => item.id == id);
    return (
      <CartContext.Consumer>
        {({ cartItems, addItemToCart, reduceItemFromCart }) => {
          return (
            <div className="menu-detail-back-ground">
              {menuItems.length ? (
                <PostItem
                  key={menuItems[itemIndex].id}
                  id={id}
                  food_name={menuItems[itemIndex].name}
                  image={menuItems[itemIndex].imgUrl}
                  food_description={menuItems[itemIndex].description}
                  food_price={menuItems[itemIndex].pricePU}
                  star={menuItems[itemIndex].star}
                  history={history}
                  addItemToCart={addItemToCart}
                  cookies={this.props.cookies}
                  menuItems={menuItems}
                />
              ) : (
                <div />
              )}
              {cookies.get("user") && (
                <FeedbackForm
                  foodID={id}
                  updateAllFoods={this.props.updateAllFoods}
                />
              )}
            </div>
          );
        }}
      </CartContext.Consumer>
    );
  }
}

export default MenuDetail;
