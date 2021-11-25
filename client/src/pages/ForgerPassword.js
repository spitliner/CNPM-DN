import React, { Component } from "react";
import ForgetPasswordForm from "../components/ForgetPasswordForm";

class ForgetPassword extends React.Component {
    render() {
        return <ForgetPasswordForm history = { this.props.history }
        />;
    }
}

export default ForgetPassword;