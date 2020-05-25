import React from "react";
import "./Sider.css";
import { Layout } from "antd";
const { Sider } = Layout;

export default class MySider extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Sider>
        <div className="box"></div>
      </Sider>
    );
  }
}
