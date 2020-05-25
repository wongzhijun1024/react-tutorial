import React from "react";
import { Layout } from "antd";
import "./Footer.css";
const { Footer } = Layout;
export default class MyFooter extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <Footer>
        <h1>脚部内容</h1>
      </Footer>
    );
  }
}
