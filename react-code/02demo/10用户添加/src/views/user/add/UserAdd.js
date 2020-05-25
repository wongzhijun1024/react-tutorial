import React from "react";
import { Button, Input, Typography } from "antd";
import "./UserAdd.css";
const { Title } = Typography;
export default class UserAdd extends React.Component {
  constructor() {
    super();
    console.log("显示页面");
  }

  render() {
    return (
      <div className="userAdd">
        <Title>用户添加页面</Title>
        <div className="nameBox">
          <Title className="name" level={4}>
            姓名:
          </Title>
          <Input placeholder="请输入用户名" />
        </div>
        <Button>提交</Button>
      </div>
    );
  }
}
