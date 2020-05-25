import React from "react";
import "./Sider.css";
import { Layout, Menu, Icon } from "antd";
const { Sider } = Layout;
const { SubMenu } = Menu;
export default class MySider extends React.Component {
  constructor() {
    super();
    this.state = {
      collapsed: false
    };
  }

  siderAction(_collapsed) {
    this.setState({
      collapsed: _collapsed
    });
  }
  render() {
    return (
      <Sider className="SiderBox" collapsed={this.state.collapsed}>
        <Menu defaultSelectedKeys={["1"]} mode="inline">
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="user" />
                <span>用户管理</span>
              </span>
            }
          >
            <Menu.Item key="3">用户浏览</Menu.Item>
            <Menu.Item key="4">用户添加</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="team" />
                <span>产品管理</span>
              </span>
            }
          >
            <Menu.Item key="6">产品添加</Menu.Item>
            <Menu.Item key="8">产品浏览</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub3"
            title={
              <span>
                <Icon type="team" />
                <span>老师管理</span>
              </span>
            }
          >
            <Menu.Item key="6">老师添加</Menu.Item>
            <Menu.Item key="8">老师浏览</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub4"
            title={
              <span>
                <Icon type="team" />
                <span>营销管理</span>
              </span>
            }
          >
            <Menu.Item key="6">营销添加</Menu.Item>
            <Menu.Item key="8">活动浏览</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    );
  }
}
