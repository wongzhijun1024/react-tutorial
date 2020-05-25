import React from "react";
import { Table, Divider, Tag } from "antd";
import "./UserScan.css";

export default class UserScan extends React.Component {
  constructor() {
    super();
  }
  deletUser() {
    console.log(this);
  }

  render() {
    return (
      <div className="box">
        <h1>用户浏览</h1>
      </div>
    );
  }
}
