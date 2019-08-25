import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Denglu.scss";
class Denglu extends Component {
  render() {
    return (
      <div className="denglu">
        <div className="input">
          <input type="text" placeholder="点击输入手机号/Email登录" />
          <input
            placeholder="输入密码"
            type="password"
            style={{ marginBottom: "25px" }}
          />
        </div>
        <div className="bottom">
          <Link to="/home">登录</Link>
          <span style={{ cursor: "pointer" }}>注册</span>
        </div>
        <div className="agree">
          <input type="checkbox" name="" id="" />
          <p>
            登录或注册即同意艺集<span>用户服务协议</span>
          </p>
        </div>
        <div className="link">
          <ul>
            <li>
              <a href="">
                <i className="fa fa-weibo" style={{ marginRight: 10 }} />
                微博
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa fa-weixin" style={{ marginRight: 10 }} />
                微信
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa fa-qq" style={{ marginRight: 10 }} />
                QQ
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Denglu;
