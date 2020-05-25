import React from "react";
import { Link } from "react-router-dom";
export default class App extends React.Component {
  action1() {
    let id = 2;
    this.props.history.push(`/view1/${id}`);
  }
  action2() {
    this.props.history.push({ pathname: "/view2", query: { id: 89 } });
  }
  action3() {
    this.props.history.push({ pathname: "/view3", state: { id: 189 } });
  }
  render() {
    return (
      <div>
        <h1>菜单页面</h1>
        <ul>
          <li>
            <Link to={`/view1/3`}>Link跳转带参数-params</Link>
          </li>
          <li>
            <div onClick={this.action1.bind(this)}>js跳转带参数-params</div>
          </li>
          <li>
            <Link to={{ pathname: "/view2", query: { id: 88 } }}>
              Link跳转带参数-query
            </Link>
          </li>
          <li>
            <div onClick={this.action2.bind(this)}>js跳转带参数-query</div>
          </li>
          <li>
            <Link to={{ pathname: "/view3", state: { id: 188 } }}>
              Link跳转带参数-state
            </Link>
          </li>
          <li>
            <div onClick={this.action3.bind(this)}>js跳转带参数-state</div>
          </li>
        </ul>
      </div>
    );
  }
}
