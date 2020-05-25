import React from "react";
import { Router, Route } from "react-router-dom";
import { createHashHistory } from "history";
import Home from "../views/view3/Menu1";
const history = createHashHistory();

export default class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Route exact path="/" component={Home} />
      </Router>
    );
  }
}
