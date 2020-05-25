import React from "react";
import "./View.css";

export default class App extends React.Component {
  constructor() {
    super();
  }

  getListView() {
    let list = [
      { id: 1, name: "小刚", age: 18 },
      { id: 2, name: "小明", age: 19 },
      { id: 3, name: "小华", age: 20 }
    ];
    const data = list.map(function(item) {
      return (
        <li key={item.id}>
          <h1>
            {item.name}的年龄是{item.age}
          </h1>
        </li>
      );
    });
    console.log(data);
    return data;
  }
  render() {
    let index = 0;
    return (
      <div>
        <ul>{this.getListView()}</ul>
      </div>
    );
  }
}
