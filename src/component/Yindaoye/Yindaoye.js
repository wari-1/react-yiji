import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Yindaoye.scss";
import Swiper from "swiper/dist/js/swiper.js";

import "swiper/dist/css/swiper.min.css";
class Yindaoye extends Component {
  componentDidMount() {
    new Swiper(".swiper-container", {
      direction: "horizontal", // 水平切换选项
      slidesPerView: 1
    });
  }

  render() {
    return (
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide one">
            <img
              src="https://dev.tencent.com/u/dtid_30b2a4e50adc6692/p/images-tuoguan/git/raw/master/src/assets/u1.jpg"
              alt=""
              style={{ width: "100vw", height: "100vh" }}
            />
          </div>
          <div className="swiper-slide two">
            <img
              src="https://dev.tencent.com/u/dtid_30b2a4e50adc6692/p/images-tuoguan/git/raw/master/src/assets/u3.jpg"
              alt=""
              style={{ width: "100vw", height: "100vh" }}
            />
          </div>
          <div className="swiper-slide three">
            <img
              src="https://dev.tencent.com/u/dtid_30b2a4e50adc6692/p/images-tuoguan/git/raw/master/src/assets/u5.jpg"
              alt=""
              style={{ width: "100vw", height: "100vh" }}
            />
          </div>
          <div className="swiper-slide four">
            <img
              src="https://dev.tencent.com/u/dtid_30b2a4e50adc6692/p/images-tuoguan/git/raw/master/src/assets/u8.jpg"
              alt=""
              style={{ width: "100vw", height: "100vh" }}
            />
          </div>
          <div className="swiper-slide five">
            <p>-2019-09-09-</p>
            <Link to="/denglu">今日推送>></Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Yindaoye;
