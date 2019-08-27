import React, { Component } from "react";
import { connect } from "react-redux";
import Swiper from "swiper/dist/js/swiper.js";
import "swiper/dist/css/swiper.min.css";
class Geren extends Component {
  state = {
    current: 0,
    open: false
  };
  onMouseEnter(index) {
    this.setState({
      current: index
    });
  }
  componentDidMount() {
    new Swiper(".swiper-container", {
      direction: "horizontal", // 水平切换选项
      slidesPerView: 1
    });
  }
  onDock = () => {
    const { open } = this.state;
    this.setState({
      open: !open
    });
  };

  render() {
    const { geren } = this.props;
    const { open } = this.state;

    return (
      <div className="geren">
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide one">
              <div className={open ? "open drawer" : "drawer"}>
                <div
                  className="right"
                  style={{ width: "100vw", height: "100vh" }}
                >
                  <div className="top">
                    <div className="inner">
                      <button onClick={this.onDock}></button>
                      <div className="logo">
                        <img
                          src="https://dev.tencent.com/u/dtid_30b2a4e50adc6692/p/images-tuoguan/git/raw/master/assent/logo.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="blank"></div>
                  </div>
                  <div className="main1">
                    <div className="inner">
                      <div className="box tou">
                        <span className="leftt">自动离线缓存</span>

                        <span style={{ fontSize: "14px" }}>
                          <span>开</span>/关
                        </span>
                      </div>
                      <div className="box">
                        <span className="leftt">
                          WI-FI状态下自动缓存高清作品
                        </span>

                        <button></button>
                      </div>
                      <div className="box">
                        <span className="leftt">使用流量状态下提醒</span>
                        <span style={{ fontSize: "14px" }}>
                          开/<span>关</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="blank"></div>
                  <div className="main1">
                    <div className="inner">
                      <div className="box tou">
                        <span className="leftt">消息推送</span>
                      </div>
                      <div className="box">
                        <span className="leftt">意见反馈</span>
                      </div>
                      <div className="box">
                        <span className="leftt">当前状态</span>
                      </div>
                      <div className="box">
                        <span className="leftt">关于艺集</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="left">
                <div className="top">
                  <img
                    src="https://dev.tencent.com/u/dtid_30b2a4e50adc6692/p/images-tuoguan/git/raw/master/assent/User-top_06.png"
                    alt=""
                    onClick={() => this.onDock()}
                  />

                  <div className="tou">
                    <img src={geren.touxiang} alt="" />
                    <span>{geren.name}</span>
                  </div>
                  <div className="bottom">
                    <span>
                      <span>关注</span>
                      <span>{geren.guanzhu}</span>
                    </span>
                    <span>
                      <span>发布</span>
                      <span>{geren.fabu}</span>
                    </span>
                    <span>
                      <span>访客</span>
                      <span>{geren.fangke}</span>
                    </span>
                  </div>
                </div>
                <div className="main1">
                  <div className="inner">
                    <div className="title">
                      <h2>艺象云集</h2>
                      <span>All ></span>
                    </div>
                    <div className="content">
                      <div className="box">
                        <img
                          src="https://dev.tencent.com/u/dtid_30b2a4e50adc6692/p/images-tuoguan/git/raw/master/assent/User-pic_11.png"
                          alt=""
                        />
                        <span className="show">
                          订阅/{geren.zhanxun.length}
                        </span>
                      </div>
                      <div className="box">
                        <img
                          src="https://dev.tencent.com/u/dtid_30b2a4e50adc6692/p/images-tuoguan/git/raw/master/assent/User-pic_13.png"
                          alt=""
                        />
                        <span className="show">
                          订阅/{geren.wenzhang.length}
                        </span>
                      </div>
                      <div className="box" style={{ marginRight: 0 }}>
                        <img
                          src="https://dev.tencent.com/u/dtid_30b2a4e50adc6692/p/images-tuoguan/git/raw/master/assent/User-pic_15.png"
                          alt=""
                        />
                        <span className="show">
                          订阅/{geren.zuoping.length}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="main3">
                  <div className="title">
                    <div className="keywords">
                      <ul className={this.state.current === 0 ? "" : "current"}>
                        {geren.works.map((list, index) => {
                          return (
                            <li key={list.id}>
                              <a
                                data-index={index}
                                onClick={() => this.onMouseEnter(index)}
                                href="#"
                                className={
                                  this.state.current === index ? "current" : ""
                                }
                              >
                                {index === 0 ? "原创" : "缓存"}
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                  <div className="content">
                    {geren.works.map((list, index) => {
                      return (
                        <div
                          className={
                            "pro-showcase" +
                            (this.state.current == index ? " show" : "")
                          }
                          key={list.id}
                        >
                          <div className="inner">
                            <div className="box">
                              {this.setState.current === 0
                                ? geren.works[0].yuanchuang.map(ele => (
                                    <img src={ele.src} key={ele.id} />
                                  ))
                                : geren.works[1].huancun.map(ele => (
                                    <img src={ele.src} key={ele.id} />
                                  ))}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide two">
              <div
                className="right"
                style={{ width: "100vw", height: "100vh" }}
              >
                <div className="top">
                  <div className="inner">
                    <button></button>
                    <div className="logo">
                      <img
                        src="https://dev.tencent.com/u/dtid_30b2a4e50adc6692/p/images-tuoguan/git/raw/master/assent/logo.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="blank"></div>
                </div>
                <div className="main1">
                  <div className="inner">
                    <div className="box tou">
                      <span className="leftt">头像</span>
                      <img
                        src="https://dev.tencent.com/u/dtid_30b2a4e50adc6692/p/images-tuoguan/git/raw/master/assent/User-info_01%20(2).png"
                        alt=""
                      />
                      <button></button>
                    </div>
                    <div className="box">
                      <span className="leftt">背景</span>
                      <span className="right">更换</span>
                      <button></button>
                    </div>
                    <div className="box">
                      <span className="leftt">名字</span>
                      <span className="right">阴雨天</span>
                      <button></button>
                    </div>
                  </div>
                </div>
                <div className="blank"></div>
                <div className="main1">
                  <div className="inner">
                    <div className="box tou">
                      <span className="leftt">我的二维码</span>
                      <img
                        src="https://dev.tencent.com/u/dtid_30b2a4e50adc6692/p/images-tuoguan/git/raw/master/assent/User-info_07.png"
                        alt=""
                      />
                      <button></button>
                    </div>
                    <div className="box">
                      <span className="leftt">我的地址</span>
                      <span className="right">
                        {geren.dizhi.shi} {geren.dizhi.qu}
                      </span>
                      <button></button>
                    </div>
                    <div className="box">
                      <span className="leftt">隐私</span>
                      <img
                        src="https://dev.tencent.com/u/dtid_30b2a4e50adc6692/p/images-tuoguan/git/raw/master/assent/!!!_11.png"
                        alt=""
                        className="red"
                      />
                      <button></button>
                    </div>
                  </div>
                </div>
                <div className="main2">
                  <div className="inner">
                    <p>为保护用户隐私，请您尽量选择默认隐私设置</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    geren: state.geren
  };
};
export default connect(mapStateToProps)(Geren);
