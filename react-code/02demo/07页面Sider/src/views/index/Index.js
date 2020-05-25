import React from "react";
import { Redirect } from "react-router-dom";
export default class Index extends React.Component {
  constructor() {
    super();
  }

  render() {
    let user = localStorage.getItem("user");
    if (user === null) {
      return <Redirect to="/login" />;
    } else {
      return <Redirect to="/home" />;
    }
  }
}
