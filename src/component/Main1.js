import React, { Component } from "react";
import { Route } from "react-router-dom";
import Zhanxun from "./Zhanxun";
import Tuijian from "./Tuijian";
import Fabu from "./Fabu";
import Geren from "./Geren";
class Main1 extends Component {
  state = {};
  render() {
    return (
      <div>
        <Route path="/zhanxun" component={Zhanxun} exact />
        <Route path="/home" component={Zhanxun} exact />
        <Route path="/zhanxun/isdisplaying" component={Zhanxun} exact />
        <Route path="/tuijian" component={Tuijian} exact />
        <Route path="/fabu" component={Fabu} exact />
        <Route path="/geren" component={Geren} exact />
      </div>
    );
  }
}

export default Main1;
