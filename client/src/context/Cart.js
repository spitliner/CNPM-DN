import { createContext, Component } from "react";
import _ from "lodash";
import { BrowserRouter as Router } from "react-router-dom";
import Axios from "axios";

export const CartContext = createContext();

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

const url = "http://localhost:4000";

class CartProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
    };
  }

  componentDidUpdate = () => {
    console.log("Current Cart Context: ", this.state.cartItems);
  };

  addItemToCart = (menuItem) => {
    let isItemExist = false;
    for (let cartItem of this.state.cartItems) {
      if (menuItem.id === cartItem.id) {
        isItemExist = true;
        break;
      }
    }

    if (!isItemExist) {
      let newCartItem = { ...menuItem, quantity: 1 };
      let newCartItems = [...this.state.cartItems, newCartItem];
      this.setState({ cartItems: newCartItems });
    } else {
      const itemIndex = this.state.cartItems.findIndex(
        (cartItem) => cartItem.id === menuItem.id
      );
      let newCartItem = { ...this.state.cartItems[itemIndex] };
      newCartItem.quantity += 1;
      this.setState({
        cartItems: [
          ...this.state.cartItems.slice(0, itemIndex),
          newCartItem,
          ...this.state.cartItems.slice(itemIndex + 1),
        ],
      });
    }
  };

  reduceItemFromCart = (menuItem) => {
    let isItemExist = false;
    for (let cartItem of this.state.cartItems) {
      if (menuItem.id === cartItem.id) {
        isItemExist = true;
        break;
      }
    }
    if (!isItemExist) {
      console.log("Item not in cart yet");
      return;
    }

    const itemIndex = this.state.cartItems.findIndex(
      (cartItem) => cartItem.id === menuItem.id
    );
    let newCartItem = { ...this.state.cartItems[itemIndex] };
    newCartItem.quantity -= 1;
    if (newCartItem.quantity !== 0) {
      this.setState({
        cartItems: [
          ...this.state.cartItems.slice(0, itemIndex),
          newCartItem,
          ...this.state.cartItems.slice(itemIndex + 1),
        ],
      });
    } else {
      this.removeItemFromCart(menuItem);
    }
  };

  removeItemFromCart = (menuItem) => {
    const itemIndex = this.state.cartItems.findIndex(
      (cartItem) => cartItem.id === menuItem.id
    );
    this.setState({
      cartItems: [
        ...this.state.cartItems.slice(0, itemIndex),
        ...this.state.cartItems.slice(itemIndex + 1),
      ],
    });
  };

  submitCart = () => {
    console.log(this.state.cartItems);
  };

  render = () => {
    return (
      <CartContext.Provider
        value={{
          cartItems: this.state.cartItems,
          addItemToCart: this.addItemToCart,
          reduceItemFromCart: this.reduceItemFromCart,
          removeItemFromCart: this.removeItemFromCart,
        }}
      >
        {this.props.children}
      </CartContext.Provider>
    );
  };
}

export default CartProvider;
