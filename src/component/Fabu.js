import React, { Component } from "react";
class Fabu extends Component {
  state = {};
  render() {
    return (
      <div className="fabu">
        <div className="inner">
          <div className="top">
            <span>上传照片</span>
            <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
          </div>
          <div className="content">
            <textarea cols="30" rows="10" placeholder="说点什么..."></textarea>
            <img
              src="https://dev.tencent.com/u/dtid_30b2a4e50adc6692/p/images-tuoguan/git/raw/master/assent/publish_05.png"
              alt=""
              style={{ marginTop: -7 }}
            />
            <img
              src="https://dev.tencent.com/u/dtid_30b2a4e50adc6692/p/images-tuoguan/git/raw/master/assent/publish-tupain_03.png"
              alt=""
              style={{ padding: "10px 0px", width: "10%" }}
            />
          </div>
          <div className="bottom">
            <span>点击获取位置</span>
            <span>添加标签</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Fabu;
