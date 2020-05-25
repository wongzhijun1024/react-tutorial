import React from "react";
import "./Home.css";
import { Layout } from "antd";
import Header from "../../components/Header/Header";
import Sider from "../../components/Sider/Sider";
import Content from "../../components/Content/Content";
import Footer from "../../components/Footer/Footer";

export default class Home extends React.Component {
  constructor(props) {
    super();
    this.state = {
      props: props
    };
  }
  render() {
    return (
      <Layout className="layout">
        <Header headerProps={this.state.props}></Header>
        <Layout className="layout2">
          <Sider></Sider>
          <Content></Content>
        </Layout>
        <Footer></Footer>
      </Layout>
    );
  }
}
