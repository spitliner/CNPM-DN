import React, { Component } from "react";
import PaymentForm from "../components/PaymentForm";
import { CartContext } from "../context/Cart";

class Payment extends React.Component {
  render() {
    return (
      <CartContext.Consumer>
        {({ cartItems }) => {
          return (
            <div>
              <h1>Payment Page</h1>
              <PaymentForm cartItems={cartItems} />
            </div>
          );
        }}
      </CartContext.Consumer>
    );
  }
}

export default Payment;