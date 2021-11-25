import React, { Component } from "react";
import ChangePasswordForm from "../components/ChangePasswordForm";

class ChangePassword extends React.Component {
    render() {
        return <ChangePasswordForm history = { this.props.history }
        />;
    }
}

export default ChangePassword;