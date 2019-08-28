import React, { Component } from "react";
import Swiper from "swiper/dist/js/swiper.js";
import "swiper/dist/css/swiper.min.css";
import { connect } from "react-redux";
// import { NavLink, Route } from "react-router-dom";
// import IsDisplaying from "./IsDisplaying";
import List from "./List/List";
// import ToDisplay from "./ToDisplay";
document.documentElement.style.fontSize =
  document.documentElement.clientWidth / 10.8 + "px";
class Zhanxun extends Component {
  state = {
    floor: [],
    current: 0,
    number: 0,
    search: false,
    huihua: false,
    shuimo: false,
    diaosu: false,
    zhuangzhi: false,
    sheying: false,
    sheji: false
  };
  onMouseEnter(index) {
    this.setState({
      current: index
    });
  }
  changeSearch = () => {
    const { search } = this.state;
    this.setState({
      search: !search
    });
  };
  changeHuihua = () => {
    const { huihua } = this.state;
    this.setState({
      huihua: !huihua
    });
  };
  changeDiaosu = () => {
    const { diaosu } = this.state;
    this.setState({
      diaosu: !diaosu
    });
  };
  changeZhuangzhi = () => {
    const { zhuangzhi } = this.state;
    this.setState({
      zhuangzhi: !zhuangzhi
    });
  };
  changeShuimo = () => {
    const { shuimo } = this.state;
    this.setState({
      shuimo: !shuimo
    });
  };
  changeSheying = () => {
    const { sheying } = this.state;
    this.setState({
      sheying: !sheying
    });
  };
  changeSheji = () => {
    const { sheji } = this.state;
    this.setState({
      sheji: !sheji
    });
  };
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
    const { zhanxun } = this.props;
    const isDisplaying = zhanxun.filter(item => item.isDisplaying);
    const {
      search,
      huihua,
      sheji,
      sheying,
      shuimo,
      diaosu,
      zhuangzhi
    } = this.state;
    const toDisplay = zhanxun.filter(item => !item.isDisplaying);
    return (
      <div className="zhanxun">
        <div className={huihua ? "huihua open" : "huihua"}>
          <div className="topp">
            <div className="inner">
              <i className="fa fa-search"></i>
              <i className="fa fa-times" onClick={this.changeHuihua}></i>
            </div>
          </div>
          <div className="content">
            <img src="" alt="" />
          </div>
        </div>
        <div className={shuimo ? "shuimo open" : "shuimo"}>
          <div className="topp">
            <div className="inner">
              <i className="fa fa-search"></i>
              <i className="fa fa-times" onClick={this.changeShuimo}></i>
            </div>
          </div>
          <div className="content">
            <img src="" alt="" />
          </div>
        </div>
        <div className={sheji ? "sheji open" : "sheji"}>
          <div className="topp">
            <div className="inner">
              <i className="fa fa-search"></i>
              <i className="fa fa-times" onClick={this.changeSheji}></i>
            </div>
          </div>
          <div className="content">
            <img src="" alt="" />
          </div>
        </div>
        <div className={sheying ? "sheying open" : "sheying"}>
          <div className="topp">
            <div className="inner">
              <i className="fa fa-search"></i>
              <i className="fa fa-times" onClick={this.changeSheying}></i>
            </div>
          </div>
          <div className="content">
            <img src="" alt="" />
          </div>
        </div>
        <div className={diaosu ? "diaosu open" : "diaosu"}>
          <div className="topp">
            <div className="inner">
              <i className="fa fa-search"></i>
              <i className="fa fa-times" onClick={this.changeDiaosu}></i>
            </div>
          </div>
          <div className="content">
            <img src="" alt="" />
          </div>
        </div>
        <div className={zhuangzhi ? "zhuangzhi open" : "zhuangzhi"}>
          <div className="topp">
            <div className="inner">
              <i className="fa fa-search"></i>
              <i className="fa fa-times" onClick={this.changeZhuangzhi}></i>
            </div>
          </div>
          <div className="content">
            <img src="" alt="" />
          </div>
        </div>
        <div className={search ? "search open" : "search "}>
          <div className="topp">
            <div className="inner">
              <i className="fa fa-search"></i>
              <i className="fa fa-times" onClick={this.changeSearch}></i>
            </div>
          </div>
          <div className="content">
            <img
              src="https://dev.tencent.com/u/dtid_30b2a4e50adc6692/p/images-tuoguan/git/raw/master/src/assets/images/sae_02.png"
              alt=""
            />
          </div>
        </div>
        <div className={!search ? "zhanxun-con" : "zhanxun-con none"}>
          <div className="topp">
            <div className="inner">
              <div className="logo">
                <img
                  src="https://dev.tencent.com/u/dtid_30b2a4e50adc6692/p/images-tuoguan/git/raw/master/assent/logo.png"
                  alt=""
                />
              </div>
              <i
                className="fa fa-search"
                aria-hidden="true"
                onClick={this.changeSearch}
              ></i>
            </div>
          </div>
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
          <div className="main">
            <div className="title">
              <div className="keywords">
                <ul className={this.state.current === 0 ? "" : "current"}>
                  {zhanxun.map((list, index) => {
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
              {zhanxun.map((list, index) => {
                return (
                  <div
                    className={
                      "pro-showcase" +
                      (this.state.current == index ? " show" : "")
                    }
                    key={list.id}
                  >
                    <List topics={index === 0 ? isDisplaying : toDisplay} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    zhanxun: state.zhanxun
  };
};

export default connect(mapStateToProps)(Zhanxun);
