import React from "react";
import "./Widget.css";

export default class Widget extends React.Component {
  constructor() {
    super();
  }

  onButtonClick() {
    console.log(this);
  }
  render() {
    return (
      <div>
        <h1>按钮点击事件</h1>
        <button onClick={this.onButtonClick.bind(this)}>按钮</button>
      </div>
    );
  }
}
