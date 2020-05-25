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

  siderAction(collapsed) {
    //获得sider对象
    let sider = this.refs.sider;
    //菜单调整
    sider.siderAction(collapsed);
  }
  render() {
    return (
      <Layout className="layout">
        <Header
          headerProps={this.state.props}
          callback={this.siderAction.bind(this)}
        ></Header>
        <Layout className="layout2">
          <Sider ref="sider"></Sider>
          <Content></Content>
        </Layout>
        <Footer></Footer>
      </Layout>
    );
  }
}
