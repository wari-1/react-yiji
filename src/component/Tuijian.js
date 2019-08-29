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
    console.log(zhan);
    const wen = tuijian.filter(item => item.wen);

    console.log(wen);
    return (
      <div className="tuijian">
        <div className="topp">
          <div className="inner">
            <div className="logo">
              <img
                src="https://dev.tencent.com/u/dtid_30b2a4e50adc6692/p/images-tuoguan/git/raw/master/assent/logo.png"
                alt=""
              />
            </div>
            <i className="fa fa-search" aria-hidden="true"></i>
          </div>
        </div>
        <div className="main">
          <div className="title">
            <div className="keywords">
              <ul className={this.state.current === 0 ? "" : "current"}>
                {tuijian.map((list, index) => {
                  return (
                    <li key={list.id}>
                      <span onClick={() => this.onMouseEnter(index)}></span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="content" style={{ height: "78vh", overflow: "auto" }}>
            {tuijian.map((list, index) => {
              return (
                <div
                  className={
                    "pro-showcase" +
                    (this.state.current === index ? " show" : " none")
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
