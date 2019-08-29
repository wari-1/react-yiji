import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Main1 from "../Main1";
import "./Home.scss";
class Home extends Component {
  state = {};
  render() {
    return (
      <div style={{ height: "100vh", height: "100vw", overflow: "auto" }}>
        <div className="home" style={{ paddingBottom: 60 }}>
          <Main1 />
        </div>
        <div className="foot">
          <ul>
            <li>
              <NavLink to="/zhanxun" activeClassName="active">
                <span
                  className={
                    this.props.match.path === "/home" ||
                    this.props.match.path.indexOf("zhanxun") !== -1
                      ? "active iconfont icon-kanzhanlan"
                      : "iconfont icon-kanzhanlan"
                  }
                  style={{ fontSize: 25 }}
                ></span>
                <span
                  className={
                    this.props.match.path === "/home" ||
                    this.props.match.path.indexOf("zhanxun") !== -1
                      ? "active "
                      : ""
                  }
                >
                  展讯
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/tuijian">
                <span
                  className={
                    this.props.match.path.indexOf("tuijian") !== -1
                      ? "active iconfont icon-tuijian"
                      : "iconfont icon-tuijian"
                  }
                  style={{ fontSize: 25 }}
                ></span>
                <span
                  className={
                    this.props.match.path.indexOf("tuijian") !== -1
                      ? "active "
                      : ""
                  }
                >
                  推荐
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/fabu">
                <span
                  className={
                    this.props.match.path.indexOf("fabu") !== -1
                      ? "active iconfont icon-fabu"
                      : "iconfont icon-fabu"
                  }
                  style={{ fontSize: 25 }}
                ></span>
                <span
                  className={
                    this.props.match.path.indexOf("fabu") !== -1
                      ? "active "
                      : ""
                  }
                >
                  发布
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/geren">
                <span
                  className={
                    this.props.match.path.indexOf("geren") !== -1
                      ? "active iconfont icon-icon-test"
                      : "iconfont icon-icon-test"
                  }
                  style={{ fontSize: 25 }}
                ></span>
                <span
                  className={
                    this.props.match.path.indexOf("geren") !== -1
                      ? "active "
                      : ""
                  }
                >
                  个人
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;
