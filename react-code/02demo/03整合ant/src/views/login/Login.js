import React from "react";
import { Button } from "antd";
import "./Login.css";

export default class Login extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="App">
        <h1>登 页面</h1>
        <Button>你好</Button>
        <Button type="primary">Primary</Button>
      </div>
    );
  }
}
