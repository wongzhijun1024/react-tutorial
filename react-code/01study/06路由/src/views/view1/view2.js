import React from "react";
import { Link } from "react-router-dom";
export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>第二个页面</h1>
        <li>
          <Link to="/">跳转到第一个页面</Link>
        </li>
      </div>
    );
  }
}
