import React from "react";
export default class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      id: props.match.params.id
    };
  }
  back() {
    console.log(this.props.history);
    this.props.history.goBack();
  }
  render() {
    return (
      <div>
        <h1>第二个页面</h1>
        <div>{this.state.id}</div>
        <div onClick={this.back.bind(this)}>返回</div>
      </div>
    );
  }
}
