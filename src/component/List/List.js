import React, { Component } from "react";
class List extends Component {
  state = {};
  render() {
    const content = topics.map(item => (
      <li key={item.id}>
        <div className="left">
          <span>展览时间：{item.during}</span>
          <span>展览地点：{item.address}</span>
        </div>
        <div className="right">
          <span>剩余{time(item)}天</span>
        </div>
      </li>
    ));
    return (
      <div>
        <ul className="content" />
      </div>
    );
  }
}

export default List;
