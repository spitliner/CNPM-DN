import React, { Component } from "react";
import Form from "../common/form";
import JoiBase from "joi";
import JoiDate from "@hapi/joi-date";

const Joi = JoiBase.extend(JoiDate); // extend Joi with Joi Date

class ReservationForm extends Form {
  constructor(props) {
    super(props);
    this.state = {
      data: { nop: "", date: "", time: "", message: "" },
      errors: {},
    };
  }

  schema = Joi.object({
    nop: Joi.number().integer().min(1).max(50).label("Number of Persons"),
    date: Joi.date().format("YYYY/MM/DD").label("Date"),
    time: Joi.string()
      .required()
      .regex(/^([0-9]{2})\:([0-9]{2}):([0-9]{2})$/)
      .label("Time")
      .messages({
        "string.pattern.base": "Time format must be HH:MM:SS",
      }),
    message: Joi.string().required().label("Message"),
  });

  doSubmit = () => {
    // Call the server
    this.props.onReservation(this.state);
  };

  render() {
    const { onUserRegister } = this.props;

    return (
      <div className="form-wrapper">
        <h1 className="form-title">Make Your Reservation</h1>
        <form className="form-body" onSubmit={this.handleSumbit}>
          {this.renderInput("nop", "Number of persons")}
          {this.renderInput("date", "Date (YYYY/MM/DD)")}
          {this.renderInput("time", "Time (HH:MM:SS)")}
          {this.renderInput("message", "Message")}
          {/* Since this.validateProperty has setState({}), every time some input in form changed, the form rerender, this.validate() fires to return updated value */}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default ReservationForm;
