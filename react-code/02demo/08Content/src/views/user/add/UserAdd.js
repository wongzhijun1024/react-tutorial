import React from "react";
import { Button, Input, Tooltip, Icon } from "antd";
import "./UserAdd.css";

export default class UserAdd extends React.Component {
  constructor() {
    super();
    console.log("显示页面");
  }

  render() {
    return (
      <div className="box">
        <h1>用户添加</h1>
      </div>
    );
  }
}
