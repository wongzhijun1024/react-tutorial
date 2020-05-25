import React from "react";
import "./Sider.css";
import { Layout, Menu, Icon } from "antd";
import { Link } from "react-router-dom";
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
            <Menu.Item key="/home">
              <Link to={"/home"}>
                <Icon type="user" />
                <span>用户浏览</span>
              </Link>
            </Menu.Item>

            <Menu.Item key="/add">
              <Link to={"/home/add"}>
                <Icon type="user" />
                <span>用户添加</span>
              </Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    );
  }
}
