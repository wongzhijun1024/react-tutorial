import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./views/App";
import reducers from "./redux/reducers";

// Store 就是保存数据的地方，你可以把它看成一个容器。整个应用只能有一个 Store。
const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
