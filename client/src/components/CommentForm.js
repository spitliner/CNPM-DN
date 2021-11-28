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
      data: { comment: "" },
      errors: {},
      notification: "",
    };
  }

  handleClick = async (evt) => {
    evt.preventDefault();
  };
  render() {
    return (
      <div>
        <div className="forget-password-form-wrapper">
          <p className="notification">{this.state.notification}</p>
          <form
            className="forget-password-form-body"
            onSubmit={this.handleClick}
          >
            {" "}
            {this.renderInputNoChangeValidate(
              "comment",
              "Input your comment here"
            )}{" "}
            {/* Since this.validateProperty has setState({}), every time some input in form changed, the form rerender, this.validate() fires to return updated value */}{" "}
            <button disabled={false} className="btn-confirm">
              Comment
            </button>
          </form>{" "}
        </div>
      </div>
    );
  }
}

export default CommentForm;
