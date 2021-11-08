import React, { Component } from "react";
import "./input.css"

const Input = (props) => {
  const { name, label, error, ...rest } = props;

  return (
    <div className="form-group">
      {/* <label htmlFor={name}>{label}</label> */}
      <input id={name} name={name} {...rest} className="form-control" placeholder={label}/>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;

//
// ref={} Putting refs here to access to this DOM element in React Javascript code
// This input now no longer has it owns local state,
// We use props to set it value, its value always comes form state.account.username
// type={type}
// value={value}
// onChange={onChange}
//
