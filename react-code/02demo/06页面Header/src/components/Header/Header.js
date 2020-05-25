import React from "react";
import "./Header.css";
import { Layout, Typography, Icon } from "antd";

const { Text } = Typography;
const { Header } = Layout;

export default class MyHeader extends React.Component {
  constructor(props) {
    super();
    this.state = {
      collapsed: true
    };
  }

  siderAction() {
    let buffer = this.state.collapsed;
    if (buffer) {
      buffer = false;
    } else {
      buffer = true;
    }

    this.setState({
      collapsed: buffer
    });
  }

  logout() {
    //清除用户保存的信息
    localStorage.removeItem("user");
    console.log(this.props.headerProps);
    this.props.headerProps.history.push({
      pathname: "/login",
      state: {}
    });
  }
  render() {
    return (
      <Header className="HeaderBox">
        <div className="titleBox">
          <Text className="title" strong={true}>
            在线课程
          </Text>
          <Icon
            className="icon"
            type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
            onClick={this.siderAction.bind(this)}
          />
        </div>
        <div className="menuBox">
          <Icon type="mail" />
          <Text
            className="menuWords"
            strong={true}
            onClick={this.logout.bind(this)}
          >
            退出
          </Text>
        </div>
      </Header>
    );
  }
}
