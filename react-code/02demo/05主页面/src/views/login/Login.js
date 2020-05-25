import React from "react";
import { Button, Input, Tooltip, Icon } from "antd";
import "./Login.css";

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      passwd: ""
    };
  }

  checkUser() {
    //获得用户名和密码
    //1,获得用户名输入框对象
    let inputUser = this.refs.inputUser;
    //2,获得密码输入框对象
    let inputPasswd = this.refs.inputPasswd;
    //3,获得输入框的值
    let name = inputUser.state.value;
    let passwd = this.state.passwd;
    //实现页面跳转
    this.props.history.push({
      pathname: "/home",
      state: { name: name, passwd: passwd }
    });
  }

  passwdChaneg(e) {
    //每次输入数据的时候，把数据保存到state里面
    let buffrt = e.target.value;
    this.setState({
      passwd: buffrt
    });
  }
  render() {
    return (
      <div className="box">
        <h1>登录页面</h1>
        <div className="login">
          <Input
            ref="inputUser"
            placeholder="输入用户名"
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            suffix={
              <Tooltip title="Extra information">
                <Icon type="info-circle" style={{ color: "rgba(0,0,0,.45)" }} />
              </Tooltip>
            }
          />
          <Input.Password
            placeholder="input password"
            ref="inputPasswd"
            onChange={this.passwdChaneg.bind(this)}
          />

          <div className="buttonBox">
            <Button type="primary" onClick={this.checkUser.bind(this)}>
              登录
            </Button>
            <Button type="primary">注册</Button>
          </div>
        </div>
      </div>
    );
  }
}
