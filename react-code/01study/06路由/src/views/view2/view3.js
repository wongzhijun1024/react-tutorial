import React from "react";
export default class App extends React.Component {
  constructor(props) {
    super();
    console.log(props);
    this.state = {
      id: props.location.state.id
    };
  }
  render() {
    return (
      <div>
        <h1>第三个页面</h1>
        <div>{this.state.id}</div>
      </div>
    );
  }
}
