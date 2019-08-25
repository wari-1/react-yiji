import React, { Component } from "react";
import Swiper from "swiper/dist/js/swiper.js";
import "swiper/dist/css/swiper.min.css";
import { connect} from "react-redux";
import { NavLink ,Route} from 'react-router-dom'
import IsDisplaying from "./IsDisplaying";
import ToDisplay from "./ToDisplay";
document.documentElement.style.fontSize =
  document.documentElement.clientWidth / 10.8 + "px";
class Zhanxun extends Component {
  componentDidMount() {
    new Swiper(".swiper-container1", {
      direction: "horizontal", // 水平切换选项
      slidesPerView: 1,
      loop: true,
      pagination: {
        //分页器
        el: ".swiper-pagination"
      },
      autoplay: true
    });
    new Swiper(".swiper-container2", {
      direction: "horizontal", // 水平切换选项
      slidesPerView: 2.5,
      spaceBetween: 8
    });
  }
  render() {
    return (
      <div className="zhanxun">
        <div className="swiper-container1">
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
          <div className="swiper-container2">
            <div className="swiper-wrapper">
              <div className="swiper-slide one">
                <img
                  src="https://dev.tencent.com/u/dtid_30b2a4e50adc6692/p/images-tuoguan/git/raw/master/src/assets/images/banner_01.jpg"
                  alt=""
                />
              </div>
              <div className="swiper-slide two">
                <img
                  src="https://dev.tencent.com/u/dtid_30b2a4e50adc6692/p/images-tuoguan/git/raw/master/src/assets/images/banner_03.jpg"
                  alt=""
                />
              </div>
              <div className="swiper-slide three">
                <img
                  src="https://dev.tencent.com/u/dtid_30b2a4e50adc6692/p/images-tuoguan/git/raw/master/src/assets/images/banner_05.jpg"
                  alt=""
                />
              </div>
              <div className="swiper-slide four">
                <img
                  src="https://dev.tencent.com/u/dtid_30b2a4e50adc6692/p/images-tuoguan/git/raw/master/src/assets/images/banner_07.jpg"
                  alt=""
                />
              </div>
              <div className="swiper-slide four">
                <img
                  src="https://dev.tencent.com/u/dtid_30b2a4e50adc6692/p/images-tuoguan/git/raw/master/src/assets/images/banner_09.jpg"
                  alt=""
                />
              </div>
              <div className="swiper-slide six">
                <img
                  src="https://dev.tencent.com/u/dtid_30b2a4e50adc6692/p/images-tuoguan/git/raw/master/src/assets/images/banner_11.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="main" >
          <div className="title">
            <div className="nav">
              <ul>
                <li className={}>
                  <NavLink to='/zhanxun/isdisplaying'></NavLink>
                </li>
                <li>
                <NavLink to='/zhanxun/todisplay'></NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="content">
            <Route path='/zhanxun/isdisplaying' component={IsDisplaying}></Route>
            <Route path='/zhanxun/todisplay' component={ToDisplay}></Route>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    z_articles: state.zhanxun
  };
};
export default connect(mapStateToProps)(Zhanxun);
