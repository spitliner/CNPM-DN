import React, { Component } from "react";
import Form from "../common/form";
import "./ForgetPasswordForm.css";
import "./LoginForm.css";
import JoiBase from "joi";
import JoiDate from "@hapi/joi-date";
import Axios from "axios";

const Joi = JoiBase.extend(JoiDate); // extend Joi with Joi Date

const url = "http://localhost:4000";
class CommentForm extends Form {
  constructor(props) {
    super(props);
    this.state = {
      data: { feedback: "", foodID: this.props.foodID },
      errors: {},
      notification: "",
    };
  }

  handleClick = async (evt) => {
    evt.preventDefault();
    console.log(this.state);
    if (!this.state.data.feedback) return;
    var response = await Axios({
      method: "POST",
      withCredentials: true,
      data: {
        foodID: this.state.foodID,
        feedback: this.state.data.feedback,
      },
      url: url + "/api/feedback", // Should set to .ENV or DEFINE CONST
    });
    this.setState({ notification: response.data.message });
  };
  render() {
    return (
      <div>
        <div className="forget-password-form-wrapper">
          <h1 className="form-title"> Send us your feedback </h1>
          <p className="notification">{this.state.notification}</p>
          <form
            className="forget-password-form-body"
            onSubmit={this.handleClick}
          >
            {" "}
            {this.renderInputNoChangeValidate(
              "feedback",
              "Input your feedback here"
            )}{" "}
            {/* Since this.validateProperty has setState({}), every time some input in form changed, the form rerender, this.validate() fires to return updated value */}{" "}
            <button disabled={false} className="btn-confirm">
              Send Feedback
            </button>
          </form>{" "}
        </div>
      </div>
    );
  }
}

export default CommentForm;
