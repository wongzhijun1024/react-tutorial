import React from "react";
import "./Content.css";
import { Layout } from "antd";
const { Content } = Layout;

export default class MyContent extends React.Component {
  constructor() {
    super();
  }
  render() {
    return <Content className="ContentBox">内容</Content>;
  }
}
