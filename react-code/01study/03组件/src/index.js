import React from "react";
import ReactDOM from "react-dom";
//import App from "./views/view1/Home/Home";
//import App from "./views/view1/react04widget/Widget";
import App from "./views/view2/react01widget/Widget";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
