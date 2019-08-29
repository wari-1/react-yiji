import React, { Component } from "react";
import "./List.scss";
import store from "../../store";
class Listt extends Component {
  state = {};
  render() {
    const { topics, geren } = this.props;
    // console.log(this.props);

    const list = topics.map(item => (
      <li key={item.id}>
        <img src={item.src} alt="" />
        {topics[0].wen ? (
          <div />
        ) : (
          <div className="left">
            <span>展览时间：{item.during}</span>
            <span>展览地点：{item.address}</span>
          </div>
        )}

        {topics[0].wen ? (
          <div />
        ) : (
          <div className="bottom">
            <i
              className=" fa fa-share-square-o"
              aria-hidden="true"
              style={{ marginRight: "25%" }}
            />
            <span>
              <i
                className="fa fa-heart"
                aria-hidden="true"
                style={{
                  marginRight: "25%",
                  color: geren.like.find(ele => ele === item.id)
                    ? "#c1372c"
                    : "#fff"
                }}
                onClick={() =>
                  store.dispatch({
                    type: "CHANGELIKE",
                    payload: { id: item.id, geren: geren }
                  })
                }
              />
              <span>{item.zanNum}</span>
            </span>
            <span>
              <i className="fa fa-eye" aria-hidden="true" />
              <span>{item.liulanNum}</span>
            </span>
            <span>
              <i className="fa fa-commenting-o" aria-hidden="true" />
              <span>{item.comments.length}</span>
            </span>
          </div>
        )}
      </li>
    ));
    return (
      <div className="list">
        <ul className="content">{list}</ul>
      </div>
    );
  }
}

export default Listt;
