import React from "react";
import { Router, Route } from "react-router-dom";
import { createHashHistory } from "history";
import View1 from "../views/view1/view";

const history = createHashHistory();

export default class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Route exact path="/" component={View1} />
      </Router>
    );
  }
}
