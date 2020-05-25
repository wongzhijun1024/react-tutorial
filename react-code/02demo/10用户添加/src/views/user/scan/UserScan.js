import React from "react";
import { Table, Divider, Tag } from "antd";
import "./UserScan.css";

export default class UserScan extends React.Component {
  constructor() {
    super();

    this.state = {
      data: [
        {
          key: "1",
          id: "1",
          name: "John Brown",
          age: 32,
          phone: "111",
          address: "New York No. 1 Lake Park"
        },
        {
          key: "2",
          id: "2",
          name: "Jim Green",
          age: 42,
          phone: "112",
          address: "London No. 1 Lake Park"
        },
        {
          key: "3",
          id: "3",
          name: "Joe Black",
          age: 32,
          phone: "113",
          address: "Sidney No. 1 Lake Park"
        }
      ]
    };
  }
  deletUser(id) {
    let data = this.state.data;

    for (let i = 0; i < data.length; i++) {
      if (data[i].id == id) {
        data.splice(i, 1);
        break;
      }
    }

    this.setState({ data: data });
  }

  render() {
    const columns = [
      {
        title: "用户ID",
        dataIndex: "id",
        key: "id"
      },
      {
        title: "用户名",
        dataIndex: "name",
        key: "name",
        render: text => <a>{text}</a>
      },
      {
        title: "年龄",
        dataIndex: "age",
        key: "age"
      },
      {
        title: "电话号码",
        dataIndex: "phone",
        key: "phone"
      },
      {
        title: "是否删除",
        key: "action",
        render: (text, record) => {
          return (
            <span>
              <a onClick={this.deletUser.bind(this, text.id)}>Delete</a>
            </span>
          );
        }
      }
    ];

    return (
      <div className="box">
        <Table columns={columns} dataSource={this.state.data} />
      </div>
    );
  }
}
