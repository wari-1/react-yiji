import React, { Component } from "react";
import { time } from "../../store/selectors";
import "./List.scss";
import store from "../../store";
import { Link } from "react-router-dom";
class List extends Component {
  render() {
    const { topics, geren } = this.props;
    // console.log(this.props);
    console.log(geren);
    console.log(topics);
    const list = topics[0].content.map(item => (
      <li key={item.id}>
        <Link
          to={
            topics[0].zhanxun
              ? `/zhanxun/topic/${item.id}`
              : `/tuijian/topic/${item.id}`
          }
        >
          <img src={item.src} alt="" />
        </Link>
        {topics[0].wen ? (
          <div />
        ) : (
          <div className="left">
            <span>展览时间：{item.during}</span>
            <span>展览地点：{item.address}</span>
          </div>
        )}

        {!topics[0].wen ? (
          <div className="right">
            <span>剩余{time(item)}天</span>
          </div>
        ) : (
          <div />
        )}
        {topics[0].wen ? (
          <div />
        ) : (
          <div className="bottom">
            <i
              className="fa fa-share-square-o"
              aria-hidden="true"
              style={{ marginRight: "25%" }}
            />
            <span>
              {topics[0].zhanxun ? (
                <i
                  className="fa fa-heart"
                  aria-hidden="true"
                  style={{
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
              ) : (
                <i
                  className="fa fa-heart"
                  aria-hidden="true"
                  style={{
                    color: geren.like.find(ele => ele === item.id)
                      ? "#c1372c"
                      : "#fff"
                  }}
                  onClick={() =>
                    store.dispatch({
                      type: "CHANGELIKET",
                      payload: { id: item.id, geren: geren }
                    })
                  }
                />
              )}

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

export default List;
