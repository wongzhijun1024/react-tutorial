import React from "react";

export default class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      title: props.title,
      hbb: props.fyl
    };
  }
  change() {
    this.state.hbb("我很好");
  }
  render() {
    return (
      <div>
        <button onClick={this.change.bind(this)}> 点击按钮 </button>
      </div>
    );
  }
}
