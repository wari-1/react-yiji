import React, { Component } from "react";
import { connect } from "react-redux";
import "./Topic.scss";
const history = require("history").createHashHistory;

class Topic extends Component {
  render() {
    const { id } = this.props.match.params;
    const { zhanxun, tuijian } = this.props;
    console.log(this.props);
    const path = this.props.match.path.replace("/topic/:id", "");
    const list = path === "/zhanxun" ? zhanxun : tuijian;

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
                onClick={() => window.history.go(-1)}
                className={index === 0 ? "show" : ""}
              ></span>
            </div>

            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    ) : (
      <div className="topic">
        <div className="main1">
          <img src={topic.src} alt="" />
          <span onClick={() => window.history.go(-1)}></span>
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
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    zhanxun: state.zhanxun,
    tuijian: state.tuijian
  };
};

export default connect(mapStateToProps)(Topic);
