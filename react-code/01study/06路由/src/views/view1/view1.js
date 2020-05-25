import React from "react";
import { Link } from "react-router-dom";
export default class App extends React.Component {
  action1() {
    this.props.history.push("/view2");
  }
  action2() {
    let id = 2;
    this.props.history.push(`/view4/${id}`);
  }
  render() {
    return (
      <div>
        <h1>第一个页面</h1>
        <ul>
          <li>
            <Link to="/view2">跳转到第二个页面</Link>
          </li>
          <li>
            <div onClick={this.action1.bind(this)}>js页面跳转</div>
          </li>
          <li>
            <Link to={`/view3/2`}>跳转到第三个页面，并且带参数</Link>
          </li>
          <li>
            <Link onClick={this.action2.bind(this)}>js页面跳转带参数</Link>
          </li>
        </ul>
      </div>
    );
  }
}
