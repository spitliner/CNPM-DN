import React, { Component } from "react";
import { UserContext } from "../context/User";
import ManageOrderFrame from "../components/ManageOrderFrame";
import AdminManageOrderFrame from "../components/AdminManageOrderFrame";
import "./AdminManageOrder.css";
import RenderStat from "../components/stat.js";

class AdminManageOrder extends React.Component {
  render() {
    return (
      <UserContext.Consumer>
        {({ currentLoginUser }) => (
          <><RenderStat />
          <AdminManageOrderFrame
            currentLoginUser={currentLoginUser}
            menuItems={this.props.menuItems}
            history={this.props.history} /></>
        )}
      </UserContext.Consumer>
    );
  }
}

export default AdminManageOrder;
