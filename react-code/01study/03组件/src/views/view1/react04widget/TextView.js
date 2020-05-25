import React from "react";
import "./Widget.css";

export default class TextView extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "我是一个组件TextView "
    };
  }

  setTitle(text) {
    this.setState({
      title: text
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.title} </h1>
      </div>
    );
  }
}
