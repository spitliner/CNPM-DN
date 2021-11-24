import React from "react";
import { CartContext } from "../context/Cart";

const MenuList = ({ items, history }) => {
  return (
    <CartContext.Consumer>
      {({ cartItems, addItemToCart, reduceItemFromCart }) => {
        return (
          <div className="section-center">
            {items.map((item) => {
              const { id, name, imgUrl, desc, pricePU } = item;
              return (
                <div key={id} className="menu-item">
                  <img
                    src={imgUrl}
                    alt={name}
                    className="photo"
                    onClick={() => {
                      history.push(`menu/${item.id}`);
                    }}
                  />
                  <div className="item-info">
                    <header>
                      <h4> {name} </h4>
                      <h4 className="price"> $ {pricePU} </h4>
                    </header>
                    <p className="item-text"> {desc} </p>
                    <button
                      className="cart"
                      onClick={() => addItemToCart(item)}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        );
      }}
    </CartContext.Consumer>
  );
};

export default MenuList;
