import React from "react";
import "./Sider.css";
import { Layout } from "antd";
const { Sider } = Layout;

export default class MySider extends React.Component {
  constructor() {
    super();
  }
  render() {
    return <Sider className="SiderBox">侧边菜单</Sider>;
  }
}
