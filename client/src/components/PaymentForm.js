import React, { Component } from "react";
import Form from "../common/form";
import "./PaymentForm.css";
import JoiBase from "joi";
import JoiDate from "@hapi/joi-date";
import Axios from "axios";

const Joi = JoiBase.extend(JoiDate); // extend Joi with Joi Date

class PaymentForm extends Form {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        paymentType: "",
        takeAwayOrEatIn: "",
        address: "",
        bank: "",
        creditCardNumber: "",
      },
      errors: {},
      notification: "",
      paymentType: [
        {
          label: "Online Payment",
          value: "Online",
        },
        {
          label: "Direct Payment",
          value: "Direct",
        },
      ],
      takeAwayOrEatIn: [
        {
          label: "Take Away",
          value: "TakeAway",
        },
        {
          label: "Eat In",
          value: "EatIn",
        },
      ],
      banks: [
        {
          label: "OCB",
          value: "OCB",
        },
        {
          label: "ACB",
          value: "ACB",
        },
        {
          label: "Sacombank",
          value: "Sacombank",
        },
        {
          label: "Argibank",
          value: "Argibank",
        },
      ],
    };
  }

  schema = Joi.object({
    paymentType: Joi.string()
      .required()
      .label("Payment Type")
      .valid("Online", "Direct")
      .messages({
        "string.domain": "Please choose your payment type",
      }),
    takeAwayOrEatIn: Joi.string()
      .required()
      .label("Take Away or Eat In")
      .valid("TakeAway", "EatIn")
      .messages({
        "string.domain": "Please choose take-away or eat-in",
      }),
    address: Joi.string().allow(null).allow("").label("Address"),
    bank: Joi.string().allow(null).allow("").label("Bank"),
    creditCardNumber: Joi.string()
      .regex(/^[0-9]{16}$/)
      .allow(null)
      .allow("")
      .label("Credit Card Number")
      .messages({
        "string.pattern.base": "Credit Card Number must be 16 digits",
      }),
  });

  doSubmit = async () => {
    const { takeAwayOrEatIn, paymentType, address } = this.state.data;
    if (takeAwayOrEatIn == "TakeAway" && address == "") {
      this.setState({
        notification: "You must give delivery address for take away order",
      });
      return;
    }

    const formData = {
      paymentType: this.state.data.paymentType,
      takeAwayOrEatIn: this.state.data.takeAwayOrEatIn,
      address: this.state.data.address,
      bank: this.state.data.bank,
      creditCardNumber: this.state.data.creditCardNumber,
      cartItems: this.props.cartItems,
    };

    if (formData.paymentType == "Direct") {
      formData.bank = "";
      formData.creditCardNumber = "";
    } else {
      if (
        formData.bank == "" ||
        !/^[0-9]{16}$/.test(formData.creditCardNumber)
      ) {
        this.setState({
          notification:
            "Please choose your bank and provide your 16 digits credit card number of online payment",
        });
        return;
      }
    }

    console.log(formData);

    // const response = await Axios({
    //   method: "POST",
    //   withCredentials: true,
    //   url: url + "/api/order/make", // Should set to .ENV or DEFINE CONST
    // });

    // if(response.data.success){
    //   this.setState({
    //    notification:
    //    "Your Payment has succeeded, enjoy your meal",
    // });
    // }
  };

  render() {
    return (
      <div className="form-background-4">
        <div className="form-outer-dark">
          <div className="form-wrapper">
            <h1 className="form-title-light"> Payment Info Page </h1>{" "}
            <p className="notification">{this.state.notification}</p>
            <form className="form-body" onSubmit={this.handleSumbit}>
              {this.renderSelect(
                "paymentType",
                "Payment Type",
                this.state.paymentType
              )}{" "}
              {this.renderSelect(
                "takeAwayOrEatIn",
                "Take Away Or Eat In",
                this.state.takeAwayOrEatIn
              )}{" "}
              {this.renderInput(
                "address",
                "Address (Omit this field if you are eating in)"
              )}{" "}
              {/* Since this.validateProperty has setState({}), every time some input in form changed, the form rerender, this.validate() fires to return updated value */}{" "}
              {this.state.data.paymentType == "Online" &&
                this.renderSelect("bank", "Bank", this.state.banks)}
              {this.state.data.paymentType == "Online" &&
                this.renderInput("creditCardNumber", "Credit Card Number")}
              {this.renderButton("Finish Your Payment")}{" "}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default PaymentForm;
