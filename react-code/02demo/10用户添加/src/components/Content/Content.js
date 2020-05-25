import React from "react";
import "./Content.css";
import { Layout } from "antd";
import { Switch, Route } from "react-router-dom";
import UserAdd from "../../views/user/add/UserAdd";
import UserScan from "../../views/user/scan/UserScan";
const { Content } = Layout;

export default class MyContent extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Content className="ContentBox">
        <Switch>
          <Route exact path={"/home"} component={UserScan} />
          <Route exact path={"/home/add"} component={UserAdd} />
        </Switch>
      </Content>
    );
  }
}
