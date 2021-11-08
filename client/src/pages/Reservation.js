import React, { Component } from "react";
import ReservationForm from "../components/ReservationForm";

class Reservation extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ReservationForm onReservation={this.props.onReservation} />
      </React.Fragment>
    );
  }
}

export default Reservation;
