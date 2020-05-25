import React from "react";
import { Pagination } from "antd";
export default class App extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return <Pagination defaultCurrent={1} total={50} />;
  }
}
