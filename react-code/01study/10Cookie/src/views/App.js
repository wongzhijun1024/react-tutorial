import React, { Component } from "react";
import cookie from "react-cookies";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: cookie.load("userId")
    };
  }

  addCookie() {
    cookie.save("userId", userId, { path: "/" });
  }
  removeCookie() {
    cookie.remove("userId", { path: "/" });
  }
  render() {
    return (
      <div>
        <h2>cookie教程</h2>
        <button onClick={this.addCookie.bind(this)}>增加数据</button>
        <button onClick={this.removeCookie.bind(this)}>删除数据</button>
      </div>
    );
  }
}
