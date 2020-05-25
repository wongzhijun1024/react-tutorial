import React from "./node_modules/react";
import "./Header.css";
import { Layout } from "./node_modules/antd";
const { Header } = Layout;

export default class MyHeader extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Header>
        <div className="box"></div>
      </Header>
    );
  }
}
