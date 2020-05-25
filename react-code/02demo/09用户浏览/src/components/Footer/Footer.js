import React from "react";
import "./Footer.css";
import { Layout } from "antd";
const { Footer } = Layout;

export default class MyFooter extends React.Component {
  constructor() {
    super();
  }
  render() {
    return <Footer className="FooterBox"></Footer>;
  }
}
