import React from "react";
import "./App.css";

export default class App extends React.Component {
  constructor() {
    super();
    //保存数据
    this.state = {
      title: "你好"
    };
  }

  change() {
    //设置数据
    this.setState({ title: "我很好！", age: 18 });
  }
  render() {
    return (
      <div>
        <h1> {this.state.title} </h1>
        <button onClick={this.change.bind(this)}> 点击按钮 </button>
      </div>
    );
  }
}
