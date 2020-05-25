import React from "react";
import "./Widget.css";
import TextView from "./TextView";

export default class Widget extends React.Component {
  constructor() {
    super();
  }

  getData() {
    // console.log(this.refs.textView);
    let textView = this.refs.textView;
    textView.setTitle("新标题");
  }

  render() {
    return (
      <div>
        <TextView ref="textView" />
        <h1> 我是第二个组件 </h1>
        <button onClick={this.getData.bind(this)}>获得textView的数据</button>
      </div>
    );
  }
}
