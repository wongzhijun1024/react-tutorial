import React from "react";
import { Layout } from "antd";
import "./Content.css";
const { Content } = Layout;
export default class MyContent extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <Content className="content">
        <h1>主要内容</h1>
      </Content>
    );
  }
}
