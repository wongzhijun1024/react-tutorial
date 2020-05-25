import React from "react";
import { Redirect } from "react-router-dom";

export default class Login extends React.Component {
  constructor() {
    super();
  }

  render() {
    return localStorage.getItem("user") === null ? (
      <Redirect to="/login" />
    ) : (
      <Redirect to="/home" />
    );
  }
}
