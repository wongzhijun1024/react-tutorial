import React from "react";
import { Router, Route } from "react-router-dom";
import { createHashHistory } from "history";
import Home from "../views/view2/home";
import View1 from "../views/view2/view1";
import View2 from "../views/view2/view2";
import View3 from "../views/view2/view3";
const history = createHashHistory();

export default class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Route exact path="/" component={Home} />
        <Route path="/view1/:id" component={View1} />
        <Route path="/view2" component={View2} />
        <Route path="/view3" component={View3} />
      </Router>
    );
  }
}
