import React from "react";
import "./Widget.css";
import TextView from "./TextView";

export default class Widget extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <TextView></TextView>
        <h1> 我是第二个组件 </h1>
      </div>
    );
  }
}
