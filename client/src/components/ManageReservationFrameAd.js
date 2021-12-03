import React, { Component } from "react";
import Axios from "axios";
import "./ManageReservationFrame.css";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
const url = "http://localhost:4000";

class ManageReservationFrame extends React.Component {

  constructor(props) {
    super(props);
    this.state = { reservations: [] };
  }
  componentDidMount = async () => {
    this.updateUserReservations();
  };
  updateUserReservations = async () => {
    var response = await Axios({
      method: "GET",
      withCredentials: true,
      url: url + "/api/admin/get_all_reservations", // Should set to .ENV or DEFINE CONST
    });
    if (!response.data.success) return alert(response.data.message);
    this.setState({ reservations: response.data.reservations });
  };
  showConfirmDialog = (index) => {
    return confirmAlert({
      title: "Warning!",
      message: "Are you sure to delete this reservation?",
      buttons: [
        {
          label: "Yes",
          onClick: async () => await this.deleteReservation(index),
        },
        {
          label: "No",
        },
      ],
    });
  };
  deleteReservation = async (index) => {
    var response = await Axios({
      method: "POST",
      data: {
        reservationID: this.state.reservations[index]._id,
      },
      withCredentials: true,
      url: url + "/api/delete_user_reservation", // Should set to .ENV or DEFINE CONST
    });
    if (!response.data.success) return alert(response.data.message);
    await this.updateUserReservations();
  };

  render() {
    return (
      <div className="manage-reservation-background">
        <div className="manage-reservation-title">
          Admin Manage Reservations
          <div className="underline"> </div>
        </div>

        {
          this.state.reservations.length ? (
            <div className="reservations-list">
              <div className="reservations-list-header">
                <div className="delete-reservation-button">Action</div>
                <div className="reservation-id">Reservation</div>
                <div className="reservation-cost">Date</div>
                <div className="reservation-status">Time</div>
              </div>
              {this.state.reservations.map((reservation, index) => (
                <div className="reservation-frame">
                  <div className="delete-reservation-button">
                    <button
                      className="delete-reservation-button-active"
                      onClick={() => this.showConfirmDialog(index)}
                    >
                      Cancel
                    </button>
                    <Popup
                      modal
                      className="manage-reservation-popup"
                      trigger={
                        <button className="delete-reservation-button-active">
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
                          <h3 className="popup-header">Reservation Detail</h3>
                          <div className="popup-content-wrapper">
                            <div className="popup-content-information-wrapper">
                              <h4 className="popup-content-header">
                                Information
                              </h4>
                              <div className="popup-content-information">
                                <div className="popup-content-information-content-wrapper">
                                  <div className="popup-content-information-content-header">
                                    Reservation ID
                                  </div>
                                  <div className="popup-content-information-content">
                                    {reservation._id}
                                  </div>
                                </div>
                                <div className="popup-content-information-content-wrapper">
                                  <div className="popup-content-information-content-header">
                                    User Email
                                  </div>
                                  <div className="popup-content-information-content">
                                    {reservation.email}
                                  </div>
                                </div>
                                <div className="popup-content-information-content-wrapper">
                                  <div className="popup-content-information-content-header">
                                    Number Of Persons
                                  </div>
                                  <div className="popup-content-information-content">
                                    {reservation.numberOfPersons}
                                  </div>
                                </div>
                                <div className="popup-content-information-content-wrapper">
                                  <div className="popup-content-information-content-header">
                                    Date
                                  </div>
                                  <div className="popup-content-information-content">
                                    {reservation.date}
                                  </div>
                                </div>
                                <div className="popup-content-information-content-wrapper">
                                  <div className="popup-content-information-content-header">
                                    Time
                                  </div>
                                  <div className="popup-content-information-content">
                                    {reservation.time}
                                  </div>
                                </div>
                                <div className="popup-content-information-content-wrapper">
                                  <div className="popup-content-information-content-header">
                                    Message
                                  </div>
                                  <div className="popup-content-information-content">
                                    {reservation.message}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <button
                            className="popup-reservation-close-button"
                            onClick={close}
                          >
                            Close
                          </button>
                        </div>
                      )}
                    </Popup>
                  </div>
                  <div className="reservation-id">{index + 1}</div>
                  <div className="reservation-cost">{reservation.date}</div>
                  <div className="reservation-status">{reservation.time}</div>
                </div>
              ))}
              <button
                className="back-to-menu-button"
                onClick={() => {
                  this.props.history.push("/admin");
                }}
              >
                Back To Admininstrator Center
              </button>
            </div>
          ) : (
            <div className="alert-no-reservation">You do not have any reservation!</div>
          )
        }
      </div >
    );
  }
}
export default ManageReservationFrame;
