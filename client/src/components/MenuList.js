import React from "react";
import { CartContext } from "../context/Cart";

const MenuList = ({ items, history, cookies }) => {
  return (
    <CartContext.Consumer>
      {({ cartItems, addItemToCart, reduceItemFromCart }) => {
        return (
          <div className="section-center">
            {items.map((item) => {
              const { id, name, imgUrl, description, pricePU } = item;
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
                    <div className="sub-item-info">
                      <header>
                        <h4> {name} </h4>
                        <div className="price"> $ {pricePU} </div>
                      </header>
                      <p className="item-text"> {description} </p>
                      {cookies.get("user") && (
                        <button
                          className="cart"
                          onClick={() => addItemToCart(item)}
                        >
                          Add to cart
                        </button>
                      )}
                    </div>
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
