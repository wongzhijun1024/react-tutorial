import React from "react";
import { Button } from "antd";
export default class App extends React.Component {
  action1() {
    this.props.history.push("/view2");
  }
  action2() {
    let id = 2;
    this.props.history.push(`/view4/${id}`);
  }
  render() {
    return (
      <div>
        <h1>第一个页面</h1>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
      </div>
    );
  }
}
