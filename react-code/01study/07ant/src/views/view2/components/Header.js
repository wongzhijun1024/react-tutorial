import React from "react";
import { Layout } from "antd";
import "./Header.css";

const { Header } = Layout;
export default class MyHeader extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <Header className="header">
        <h1>头部内容</h1>
      </Header>
    );
  }
}
