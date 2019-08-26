import React, { Component } from "react";
import { connect } from "react-redux";
import "./Topic.scss";
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
    return (
      <div>
        <div className="main1">
          <img src={topic.src} alt="" />
          <span></span>
          <div className="left">
            <span>展览时间：{item.during}</span>
            <span>展览地点：{item.address}</span>
          </div>
        </div>
        <div className="main2">
          <img src="" alt="" />
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
    zhanxun: state.zhanxun
    // tuijian: state.tuijian
  };
};

export default connect(mapStateToProps)(Topic);
