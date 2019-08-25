import React, { Component } from "react";
import Swiper from "swiper/dist/js/swiper.js";
import "swiper/dist/css/swiper.min.css";
class Zhanxun extends Component {
  componentDidMount() {
    new Swiper(".swiper-container", {
      direction: "horizontal", // 水平切换选项
      slidesPerView: 1,
      loop: true,
      pagination: {
        //分页器
        el: ".swiper-pagination"
      },
      autoplay: true
    });
  }
  render() {
    return (
      <div className="zhanxun">
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide one">
              <img
                src="https://dev.tencent.com/u/dtid_30b2a4e50adc6692/p/images-tuoguan/git/raw/master/src/assets/u65.jpg"
                alt=""
              />
            </div>
            <div className="swiper-slide two">
              <img
                src="https://dev.tencent.com/u/dtid_30b2a4e50adc6692/p/images-tuoguan/git/raw/master/src/assets/u62.jpg"
                alt=""
              />
            </div>
            <div className="swiper-slide three">
              <img
                src="https://dev.tencent.com/u/dtid_30b2a4e50adc6692/p/images-tuoguan/git/raw/master/src/assets/u68.jpg"
                alt=""
              />
            </div>
            <div className="swiper-pagination" style={{ zIndex: 50 }} />
          </div>
        </div>
        <div className="banner2">
          <div className="container">
            <div className="box" />
            <img src="" alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default Zhanxun;
