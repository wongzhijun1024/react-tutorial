import React from "react";
import "./View.css";

export default class App extends React.Component {
  constructor() {
    super();
  }

  click() {
    console.log("按钮点击！");
  }
  render() {
    let index = 0;
    return (
      <div>
        <button onClick={this.click}> 按钮 {1 + 1} </button>
        <h1 className="title"> {index == 1 ? "True!" : "False"} </h1>
        <input type="button" value="按钮" disabled />
        <input type="button" value="按钮" disabled={false} />
      </div>
    );
  }
}
