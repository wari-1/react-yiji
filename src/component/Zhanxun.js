import React, { Component } from "react";
import Swiper from "swiper/dist/js/swiper.js";
import "swiper/dist/css/swiper.min.css";
import { connect } from "react-redux";
// import { NavLink, Route } from "react-router-dom";
// import IsDisplaying from "./IsDisplaying";
import List from "./List/List";
import Listt from "./List/Listt";
// import ToDisplay from "./ToDisplay";
document.documentElement.style.fontSize =
  document.documentElement.clientWidth / 10.8 + "px";
class Zhanxun extends Component {
  state = {
    
    current: 0,
    
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
    const { zhanxun ,geren} = this.props;
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
    const huihuac = [
      ...zhanxun[0].content.filter(item => item.type === "huihua"),
      ...zhanxun[1].content.filter(item => item.type === "huihua")
    ];
    const shejic = [
      ...zhanxun[0].content.filter(item => item.type === "sheji"),
      ...zhanxun[1].content.filter(item => item.type === "sheji")
    ];
    const sheyingc = [
      ...zhanxun[0].content.filter(item => item.type === "sheying"),
      ...zhanxun[1].content.filter(item => item.type === "sheying")
    ];
    const diaosuc = [
      ...zhanxun[0].content.filter(item => item.type === "diaosu"),
      ...zhanxun[1].content.filter(item => item.type === "diaosu")
    ];
    const zhuangzhic = [
      ...zhanxun[0].content.filter(item => item.type === "zhuangzhi"),
      ...zhanxun[1].content.filter(item => item.type === "zhuangzhi")
    ];
    const shuimoc = [
      ...zhanxun[0].content.filter(item => item.type === "shuimo"),
      ...zhanxun[1].content.filter(item => item.type === "shuimo")
    ];
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
            <Listt topics={huihuac} geren={geren}/>
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
            <Listt topics={shuimoc} geren={geren}/>
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
            <Listt topics={shejic} geren={geren}/>
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
            <Listt topics={sheyingc} geren={geren}/>
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
            <Listt topics={diaosuc} geren={geren}/>
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
            {zhuangzhic.length ? (
              <Listt topics={zhuangzhic} geren={geren}/>
            ) : (
              <img src="https://dev.tencent.com/u/dtid_30b2a4e50adc6692/p/images-tuoguan/git/raw/master/src/assets/images/zhuangzhi_02.png" />
            )}
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
        <div
          className={
            !search &&
            !huihua &&
            !zhuangzhi &&
            !sheji &&
            !sheying &&
            !shuimo &&
            !diaosu
              ? "zhanxun-con"
              : "zhanxun-con none"
          }
        >
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
                    onClick={this.changeHuihua}
                  />
                </div>
                <div className="swiper-slide two">
                  <img
                    src="https://dev.tencent.com/u/dtid_30b2a4e50adc6692/p/images-tuoguan/git/raw/master/src/assets/images/banner_03.jpg"
                    alt=""
                    onClick={this.changeShuimo}
                  />
                </div>
                <div className="swiper-slide three">
                  <img
                    src="https://dev.tencent.com/u/dtid_30b2a4e50adc6692/p/images-tuoguan/git/raw/master/src/assets/images/banner_05.jpg"
                    alt=""
                    onClick={this.changeSheji}
                  />
                </div>
                <div className="swiper-slide four">
                  <img
                    src="https://dev.tencent.com/u/dtid_30b2a4e50adc6692/p/images-tuoguan/git/raw/master/src/assets/images/banner_07.jpg"
                    alt=""
                    onClick={this.changeSheying}
                  />
                </div>
                <div className="swiper-slide four">
                  <img
                    src="https://dev.tencent.com/u/dtid_30b2a4e50adc6692/p/images-tuoguan/git/raw/master/src/assets/images/banner_09.jpg"
                    alt=""
                    onClick={this.changeDiaosu}
                  />
                </div>
                <div className="swiper-slide six">
                  <img
                    src="https://dev.tencent.com/u/dtid_30b2a4e50adc6692/p/images-tuoguan/git/raw/master/src/assets/images/banner_11.jpg"
                    alt=""
                    onClick={this.changeZhuangzhi}
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
                        <span
                          
                          onClick={() => this.onMouseEnter(index)}
                          
                        ></span>
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
                      (this.state.current === index ? " show" : "")
                    }
                    key={list.id}
                  >
                    <List topics={index === 0 ? isDisplaying : toDisplay} geren={geren}/>
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
    zhanxun: state.zhanxun,
    geren:state.geren
  };
};

export default connect(mapStateToProps)(Zhanxun);
