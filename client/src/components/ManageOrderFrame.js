import React, { Component } from "react";
import Axios from "axios";
import "./ManageOrderFrame.css";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
const url = "http://localhost:4000";

class ManageOrderFrame extends React.Component {
  constructor(props) {
    super(props);
    this.state = { orders: [] };
  }
  componentDidMount = async () => {
    this.updateUserOrders();
  };
  updateUserOrders = async () => {
    var response = await Axios({
      method: "GET",
      withCredentials: true,
      url: url + "/api/get_user_orders", // Should set to .ENV or DEFINE CONST
    });
    if (!response.data.success) return alert(response.data.message);
    this.setState({ orders: response.data.orders });
  };
  showConfirmDialog = (index) => {
    return confirmAlert({
      title: "Warning!",
      message: "Are you sure to delete this order?",
      buttons: [
        {
          label: "Yes",
          onClick: async () => await this.deleteOrder(index),
        },
        {
          label: "No",
        },
      ],
    });
  };
  deleteOrder = async (index) => {
    var response = await Axios({
      method: "POST",
      data: {
        orderID: this.state.orders[index]._id,
      },
      withCredentials: true,
      url: url + "/api/delete_user_order", // Should set to .ENV or DEFINE CONST
    });
    if (!response.data.success) return alert(response.data.message);
    await this.updateUserOrders();
  };
  renderCartItem = (cartItem) => {
    var result = this.props.menuItems.find(
      (element) => cartItem.id == element.id
    );
    if (!result) return <div />;
    return (
      <div className="popup-content-cart-item">
        <div className="cart-item-image">
          <img src={result.imgUrl}></img>
        </div>
        <div className="cart-item-name">{result.name}</div>
        <div className="cart-item-price">Price: {result.pricePU}</div>
        <div className="cart-item-quantity">Quantity: {cartItem.quantity}</div>
      </div>
    );
  };
  render() {
    return (
      <div className="manage-order-background">
        <div className="manage-order-title">
          Manage Your Orders
          <div className="underline"> </div>
        </div>

        {this.state.orders.length ? (
          <div className="orders-list">
            <div className="orders-list-header">
              <div className="delete-order-button">Action</div>
              <div className="order-id">Order</div>
              <div className="order-cost">Cost</div>
              <div className="order-status">Status</div>
            </div>
            {this.state.orders.map((order, index) => (
              <div className="order-frame">
                <div className="delete-order-button">
                  {order.status == "Waiting" ? (
                    <button
                      className="delete-order-button-active"
                      onClick={() => this.showConfirmDialog(index)}
                    >
                      Cancel
                    </button>
                  ) : (
                    <button className="delete-order-button-not-active">
                      Cancel
                    </button>
                  )}
                  <Popup
                    modal
                    trigger={
                      <button className="delete-order-button-active">
                        {" "}
                        Detail
                      </button>
                    }
                  >
                    {(close) => (
                      <div>
                        <button className="close" onClick={close}>
                          &times;
                        </button>
                        <h3 className="popup-header">Order {index + 1}</h3>
                        <div className="popup-content-wrapper">
                          <div className="popup-content-information-wrapper">
                            <h4 className="popup-content-header">
                              Information
                            </h4>
                            <div className="popup-content-information">
                              <div>OrderID: {order._id}</div>
                              <div>Payment type: {order.paymentType}</div>
                              <div>Eat type: {order.takeAwayOrEatIn}</div>
                              <div>Status: {order.status}</div>
                              <div>Order time: {order.time}</div>
                              <div>Total cost: {order.totalCost}</div>
                              <div>Final cost: {order.finalCost}</div>
                              {order.voucherCode ? (
                                <div>Voucher: {order.voucher}</div>
                              ) : (
                                <div />
                              )}
                              {order.address ? (
                                <div>Delivery Address: {order.address}</div>
                              ) : (
                                <div />
                              )}
                              {order.paymentType == "Online" ? (
                                <div>Payment bank: {order.bank}</div>
                              ) : (
                                <div />
                              )}
                              {order.paymentType == "Online" ? (
                                <div>
                                  Payment credit card: {order.creditCardNumber}
                                </div>
                              ) : (
                                <div />
                              )}
                            </div>
                          </div>
                          <div className="popup-content-cart">
                            <h4 className="popup-content-header">Cart</h4>
                            <div className="popup-content-cart-wrapper">
                              {order.cartItems.map((cartItem) =>
                                this.renderCartItem(cartItem)
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </Popup>
                </div>
                <div className="order-id">{index + 1}</div>
                <div className="order-cost">{order.finalCost} $</div>
                <div className="order-status">{order.status}</div>
              </div>
            ))}
          </div>
        ) : (
          <div className="alert-no-order">You do not have any order!</div>
        )}
      </div>
    );
  }
}
export default ManageOrderFrame;
