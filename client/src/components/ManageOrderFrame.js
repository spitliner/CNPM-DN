import React, { Component } from "react";
class ManageOrderFrame extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: {} };
  }
  componentDidMount = () => {
    // GET USER ORDERS
  };
  render() {
    return <div>{this.props.currentLoginUser.username}</div>;
  }
}
export default ManageOrderFrame;
