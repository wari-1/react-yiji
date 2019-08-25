import React, { Component } from "react";
import { Route } from "react-router-dom";
import Denglu from "./Denglu/Denglu";
import Yindaoye from "./Yindaoye/Yindaoye";
import Home from "./Home/Home";
class Main extends Component {
  render() {
    return (
      <div>
        <Route path="/" component={Yindaoye} exact />
        <Route path="/denglu" component={Denglu} />

        <Route path="/home" component={Home} exact />
        <Route path="/zhanxun" component={Home} exact />
        <Route path="/tuijian" component={Home} exact />
        <Route path="/fabu" component={Home} exact />
        <Route path="/geren" component={Home} exact />
      </div>
    );
  }
}

export default Main;
