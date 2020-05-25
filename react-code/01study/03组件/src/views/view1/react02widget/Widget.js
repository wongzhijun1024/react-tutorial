import React from "react";
import "./Widget.css";

export default class Widget extends React.Component {
  constructor() {
    super();
  }
  componentWillMount() {
    console.log("在渲染前调用!");
  }
  componentDidMount() {
    console.log("发送AJAX请求等操作!");
  }
  componentWillReceiveProps(newProps) {
    console.log("在组件接收到一个新的 prop (更新后)时被调用!");
  }
  shouldComponentUpdate(newProps, newState) {
    console.log("在组件接收到新的props或者state时被调用!");
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log("组件接收到新的props或者state但还没有render时被调用!");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("组件完成更新后立即调用!");
  }
  componentWillUnmount() {
    console.log("组件从 DOM 中移除之前立刻被调用!");
  }
  render() {
    return (
      <div>
        <h1> 我是一个组件 </h1>
      </div>
    );
  }
}
