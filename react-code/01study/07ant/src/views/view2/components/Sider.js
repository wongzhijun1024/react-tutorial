import React from "react";
import { Layout } from "antd";
import "./Sider.css";
const { Sider } = Layout;
export default class MySider extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <Sider className="sider" collapsible>
        <h1>菜单页面</h1>
      </Sider>
    );
  }
}
