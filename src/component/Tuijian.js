import React, { Component } from "react";
import { connect } from "react-redux";
class Tuijian extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="main">
          <div className="title">
            <div className="keywords">
              <ul className={this.state.current === 0 ? "" : "current"}>
                {zhanxun.map((list, index) => {
                  return (
                    <li key={list.id}>
                      <a
                        data-index={index}
                        onClick={() => this.onMouseEnter(index)}
                        href="#"
                      ></a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="content">
            {zhanxun.map((list, index) => {
              return (
                <div
                  className={
                    "pro-showcase" +
                    (this.state.current == index ? " show" : "")
                  }
                  key={list.id}
                >
                  <List topics={index === 0 ? isDisplaying : toDisplay} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    tuijian: state.tuijian
  };
};

export default connect(mapStateToProps)(Tuijian);
