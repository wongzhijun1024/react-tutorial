import React from "react";
export default class App extends React.Component {
  constructor(props) {
    super();
    console.log(props.match.params.id);
  }
  render() {
    return (
      <div>
        <h1>第四个页面</h1>
      </div>
    );
  }
}
