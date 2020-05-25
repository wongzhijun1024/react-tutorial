import React from "react";
import "./Home.css";
import { Layout } from "antd";
import Header from "../../components/header/Header";
const { Footer, Sider, Content } = Layout;

export default class Home extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Layout>
        <Header>Header</Header>
        <Layout>
          <Sider>Sider</Sider>
          <Content>Content</Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    );
  }
}
