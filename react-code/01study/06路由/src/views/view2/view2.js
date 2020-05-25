import React from "react";
export default class App extends React.Component {
  constructor(props) {
    super();

    console.log(props);
    this.state = {
      id: props.location.query.id
    };
  }
  render() {
    return (
      <div>
        <h1>第二个页面</h1>
        <div>{this.state.id}</div>
      </div>
    );
  }
}
