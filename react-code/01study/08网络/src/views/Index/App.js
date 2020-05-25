import React from "react";
import "./App.css";
import net from "../../utils/net";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "你好"
    };
  }

  change() {
    this.setState({ title: "我很好！" });

    net.get("login", { name: name, passwd: passwd }, function(ob) {});
  }
  render() {
    return (
      <div>
        <h1> {this.state.title} </h1>{" "}
        <button onClick={this.change.bind(this)}> 点击按钮 </button>{" "}
      </div>
    );
  }
}
