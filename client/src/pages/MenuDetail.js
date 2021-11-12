import React, { Component } from "react";
import "./MenuDetail.css";
import { FoodDetail } from "./Menu.js";

function PostItem(props) {
  return (
    <div className="post-item">
      <h2 className="post-name"> {props.food_name}</h2>
      <form action="http://localhost:3000/menu">
        <button class="post-button-BTM" type="submit">
          Back To Menu
        </button>
      </form>
      <div>
        <img className="post-img" src={props.image} />
      </div>
      <h2 className="post-Ingredient">Ingredient</h2>
      <p className="post-desc">{props.food_description}</p>
      <h3 className="post-price">Prices: &nbsp; {props.food_price}$</h3>
      <button className="post-button-ATC">Add To Cart</button>
    </div>
  );
}

class MenuDetail extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div>
          {FoodDetail.map((food) => (
            <PostItem
              key={food.id}
              food_name={food.name}
              image={food.imgUrl}
              food_description={food.description}
              food_price={food.pricePU}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default MenuDetail;
