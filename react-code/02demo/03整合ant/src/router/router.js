import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createHashHistory } from "history";
import Home from "../views/home/Home";
import Login from "../views/login/Login";

const history = createHashHistory();
export default class MyRouter extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Router history={history}>
        <Route exact path="/home" component={Home} />
        <Route path="/login" component={Login} />
      </Router>
    );
  }
}
