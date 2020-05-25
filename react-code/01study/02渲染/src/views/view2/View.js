import React from "react";
import "./View.css";

export default class App extends React.Component {
  constructor() {
    super();
  }

  getView() {
    let isShow = 3;
    if (isShow === 3) {
      return <div>你是对的</div>;
    } else {
      return <div>错误答案</div>;
    }
  }
  render() {
    let index = 0;
    return <div>{this.getView()}</div>;
  }
}
