import React from "react";
export default class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      title: props.name
    };
  }

  render() {
    return (
      <div>
        <h1> {this.props.name} </h1>
      </div>
    );
  }
}
