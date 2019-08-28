import React, { Component } from "react";
import { connect } from "react-redux";
import List from "./List/List";
class Tuijian extends Component {
  state = {
    current: 0
  };
  onMouseEnter(index) {
    this.setState({
      current: index
    });
  }
  render() {
    const { tuijian, geren } = this.props;
    const zhan = tuijian.filter(item => !item.wen);
    const wen = tuijian.filter(item => item.wen);
    console.log(zhan);
    console.log(wen);
    return (
      <div className="tuijian">
        <div className="main">
          <div className="title">
            <div className="keywords">
              <ul className={this.state.current === 0 ? "" : "current"}>
                {tuijian.map((list, index) => {
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
            {tuijian.map((list, index) => {
              return (
                <div
                  className={
                    "pro-showcase" +
                    (this.state.current == index ? " show" : "")
                  }
                  key={list.id}
                >
                  <List
                    topics={this.state.current === 0 ? zhan : wen}
                    geren={geren}
                  />
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
    tuijian: state.tuijian,
    geren: state.geren
  };
};

export default connect(mapStateToProps)(Tuijian);
