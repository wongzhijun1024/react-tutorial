import React from "react";
import { Router, Route } from "react-router-dom";
import { createHashHistory } from "history";
import View1 from "../views/view1/view1";
import View2 from "../views/view1/view2";
import View3 from "../views/view1/view3";
import View4 from "../views/view1/view4";
const history = createHashHistory();

export default class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Route exact path="/" component={View1} />
        <Route path="/view2" component={View2} />
        <Route path="/view3/:id" component={View3} />
        <Route path="/view4/:id" component={View4} />
      </Router>
    );
  }
}
