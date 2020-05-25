import React from "react";
import "./Home.css";
import Widget from "../react03widget/Widget";
export default class Home extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>门户页面</h1>
        <Widget />
      </div>
    );
  }
}
