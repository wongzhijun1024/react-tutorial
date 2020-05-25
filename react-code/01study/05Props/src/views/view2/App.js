import React from "react";

import TextView from "./TextView";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "你好"
    };
  }

  change(text) {
    this.setState({ title: text });
  }
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <TextView fyl={this.change.bind(this)} />
      </div>
    );
  }
}
