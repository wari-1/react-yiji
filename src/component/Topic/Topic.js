import React, { Component } from "react";
import { connect } from "react-redux";
import "./Topic.scss";
import store from "../../store";

class Topic extends Component {
  state = {
    zhankai: false,
    focus: false,
    address: false,
    pinglun: false,
    share: false,
    text: ""
  };
  input = event => {
    this.setState({
      text: event.target.value
    });
    console.log(event.target.value);
    console.log(this.state.text);
  };
  clear = () => {
    this.setState({
      text: ""
    });
  };
  addComment = () => {
    const { id } = this.props.match.params;
    const { text, pinglun } = this.state;
    const { geren } = this.props;
    if (text.trim()) {
      store.dispatch({
        type: "ADDCOMMENT",
        payload: { postId: id, clear: this.clear, text: text, geren: geren }
      });
      this.clear();
      this.setState({
        pinglun: !pinglun
      });
    }
  };
  changeZhankai = () => {
    const { zhankai } = this.state;
    this.setState({
      zhankai: !zhankai
    });
  };
  changeFocus = () => {
    const { focus } = this.state;
    this.setState({
      focus: !focus
    });
  };
  changeAddress = () => {
    const { address } = this.state;
    this.setState({
      address: !address
    });
  };
  changePinglun = () => {
    const { pinglun } = this.state;
    this.setState({
      pinglun: !pinglun
    });
  };
  changeShare = () => {
    const { share } = this.state;
    this.setState({
      share: !share
    });
  };
  changeShare1 = () => {
    const { share } = this.state;
    this.setState({
      share: false
    });
  };

  render() {
    const { id } = this.props.match.params;
    const { zhanxun, tuijian, geren } = this.props;
    const { zhankai, focus, address, pinglun, share, text } = this.state;
    console.log(this.props);
    const path = this.props.match.path.replace("/topic/:id", "");
    const list = path === "/zhanxun" ? zhanxun : tuijian;
    console.log(list.find(item => item.content.find(ele => ele.id === id)));
    console.log(id);
    const topic = list
      .find(item => item.content.find(ele => ele.id === id))
      .content.find(Element => Element.id === id);
    return topic.wen ? (
      <div>
        {topic.neirong.map((item, index) => (
          <div key={item.id} className="topic">
            <div className={index === 0 ? "main1 box" : "box"}>
              <img src={item.src} alt="" />
              <span
                onClick={() => this.props.history.go(-1)}
                className={index === 0 ? "show" : ""}
              ></span>
            </div>

            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    ) : (
      <div className="topic" style={{ paddingBottom: 80 }}>
        <div className={address || pinglun ? "none main" : "main"}>
          <div className="main1">
            <img src={topic.src} alt="" />
            <span onClick={() => this.props.history.go(-1)}></span>
          </div>
          <div className="main2">
            <img
              src="https://dev.tencent.com/u/dtid_30b2a4e50adc6692/p/images-tuoguan/git/raw/master/src/assets/images/u224_02.jpg"
              alt=""
            />
            <p>{topic.desc}</p>
          </div>
          <div className="main3">
            <img src={topic.author.src} alt="" />
            <p>{topic.author.desc}</p>
          </div>
          <div className="main3">
            <img src={topic.works.src[0]} alt="" />
            <img src={topic.works.src[1]} alt="" />
            <img src={topic.works.src[2]} alt="" />
            {topic.works.src.length === 4 ? (
              <img src={topic.works.src[3]} alt="" />
            ) : (
              ""
            )}
          </div>
          {!topic.wen ? (
            <div className="main4">
              <img
                src="https://dev.tencent.com/u/dtid_30b2a4e50adc6692/p/images-tuoguan/git/raw/master/src/assets/images/u194_10.jpg"
                alt=""
              />
              <div className="comments">
                {topic.comments.map((item, index) => (
                  <li
                    key={item.id}
                    className={!zhankai && index > 1 ? "none" : "block"}
                  >
                    <span>{item.name}</span>
                    <p>{item.text}</p>
                  </li>
                ))}
                {topic.comments.length > 2 ? (
                  <div className="btn">
                    {!zhankai ? (
                      <p onClick={this.changeZhankai}>
                        展开剩余{topic.comments.length - 2}条评论
                      </p>
                    ) : (
                      <p onClick={this.changeZhankai}>收回</p>
                    )}
                  </div>
                ) : (
                  <div />
                )}
              </div>
            </div>
          ) : (
            <div />
          )}
          {!topic.wen ? (
            <div className="bot">
              <button>
                <i
                  className={
                    geren.like.find(ele => ele === topic.id)
                      ? "fa fa-heart"
                      : "red fa fa-heart"
                  }
                  aria-hidden="true"
                  onClick={() =>
                    store.dispatch({
                      type: "CHANGELIKE",
                      payload: { id: topic.id, geren: geren }
                    })
                  }
                  style={{
                    color: geren.like.find(ele => ele === topic.id)
                      ? "red"
                      : "#fff"
                  }}
                ></i>
                关注
              </button>
              <button onClick={this.changeAddress}>
                <i className="fa fa-location-arrow" aria-hidden="true"></i>到这
              </button>
              <button onClick={this.changeShare}>
                <i className="fa fa-share" aria-hidden="true"></i>
                分享
              </button>
              <button onClick={this.changePinglun}>
                <i className="fa fa-commenting-o" aria-hidden="true"></i>评论
              </button>
            </div>
          ) : (
            <div />
          )}
        </div>
        <div className={address ? "address block" : "address none"}>
          <div className="main1">
            <img
              src="https://dev.tencent.com/u/dtid_30b2a4e50adc6692/p/images-tuoguan/git/raw/master/src/assets/images/map_01.png"
              alt=""
            />
            <span
              onClick={() => this.props.history.go(-1)}
              style={{ zIndex: 51 }}
            ></span>
          </div>
          <div className="text">
            <div className="inner">
              <h4>{topic.address}</h4>
              <span>开放时间：{topic.during}</span>
              <p style={{ padding: 0 }}>地址：淮海路100号</p>
            </div>
          </div>
        </div>
        <div className={pinglun ? "pinglun block" : "pinglun none"}>
          <div className="fabu">
            <div className="inner">
              <div className="top">
                <i
                  className="fa fa-angle-left"
                  aria-hidden="true"
                  onClick={() => this.props.history.goBack(-1)}
                  style={{ left: 0, fontSize: 25, color: "#000" }}
                ></i>
                <span>评论</span>
                <i
                  className="fa fa-paper-plane-o"
                  aria-hidden="true"
                  onClick={this.addComment}
                ></i>
              </div>
              <div className="content">
                <textarea
                  cols="30"
                  rows="10"
                  placeholder="说点什么..."
                  onChange={event => {
                    this.input(event);
                  }}
                  value={text}
                ></textarea>

                <img
                  src="https://dev.tencent.com/u/dtid_30b2a4e50adc6692/p/images-tuoguan/git/raw/master/src/assets/images/u310_03.png"
                  alt=""
                  style={{ padding: "10px 0px", width: "10%" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="share" className={share ? "share block" : "share none"}>
          <div className="modal-con">
            <div className="modal" onClick={this.changeShare}></div>
            <div className="content">
              <img
                src="https://dev.tencent.com/u/dtid_30b2a4e50adc6692/p/images-tuoguan/git/raw/master/src/assets/images/share_02.png"
                alt=""
              />
              <button onClick={this.changeShare}>取消</button>
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
    tuijian: state.tuijian,
    geren: state.geren
  };
};

export default connect(mapStateToProps)(Topic);
