import React from "react";
import { Layout } from "antd";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Sider from "./components/Sider";
import "./Home.css";
export default class Home extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <Layout className="layout">
        <Sider />
        <Layout>
          <Header />
          <Content />
          <Footer />
        </Layout>
      </Layout>
    );
  }
}
