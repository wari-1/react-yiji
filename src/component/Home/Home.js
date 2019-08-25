import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Main1 from "../Main1";
import "./Home.scss";
class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="home">
          <Main1 />
        </div>
        <div className="foot">
          <ul>
            <li>
              <NavLink to="/zhanxun" activeClassName="active" />
            </li>
            <li>
              <NavLink to="/tuijian" activeClassName="active" />
            </li>
            <li>
              <NavLink to="/fabu" activeClassName="active" />
            </li>
            <li>
              <NavLink to="/geren" activeClassName="active" />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;
