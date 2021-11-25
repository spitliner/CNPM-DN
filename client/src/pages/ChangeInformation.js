import React, { Component } from "react";
import ChangeInformationForm from "../components/ChangeInformationForm";

class ChangeInformation extends React.Component {
  render() {
    return <ChangeInformationForm history={this.props.history} />;
  }
}

export default ChangeInformation;
