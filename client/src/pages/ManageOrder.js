import React, { Component } from "react";
import { UserContext } from "../context/User";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Order.css";
import "../icons/fontawesome";
import VoucherForm from "../components/VoucherForm";
import { extend } from "joi";

class ManageOrder extends React.Component {
  render() {
    return (
      <UserContext.Consumer>
        {({ currentLoginUser }) => <div>This is a fucking shit</div>}
      </UserContext.Consumer>
    );
  }
}

export default ManageOrder;
