import React, { Component } from 'react'
import './index.scss';
import { Radio, Checkbox } from 'antd';

const Group = Radio.Group;
const CheckGroup = Checkbox.Group;

const plainOptions = ['我没看过的', '可在线播放'];
const defaultCheckedList = [];

class Home extends Component {
  render () {
    return (
      <div className="wrapper">
        <div className="content clearfix">
          <h1>选电影</h1>
          <div className='article'>
            <div className="filter">
              <div className="tags">
                <div className="tag_list">
                  <label className='activate'>热门</label>
                  <label>最新</label>
                  <label>经典</label>
                  <label>可播放</label>
                  <label>豆瓣高分</label>
                  <label>冷门佳片</label>
                  <label>华语</label>
                  <label>欧美</label>
                  <label>韩国</label>
                  <label>日本</label>
                  <label>动作</label>
                  <label>喜剧</label>
                  <label>爱情</label>
                  <label>科幻</label>
                  <label>悬疑</label>
                  <label>恐怖</label>
                  <label>动画</label>
                </div>
              </div>
              <div className="tool clearfix">
                <div className="sort">
                  <Group value={1}>
                    <Radio value={1}>按热度排序</Radio>
                    <Radio value={2}>按时间排序</Radio>
                    <Radio value={3}>按评价排序</Radio>
                  </Group>
                </div>
                <div className="check">
                  <CheckGroup 
                    options={plainOptions}
                  />
                </div>
              </div>
              <div className="list">
                <a href="/" target="_blank" className="item">
                  <div className="cover-wp">
                    <img src="https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2559578757.jpg" alt="谋杀议案"/>
                  </div>
                  <p>
                    <span className="green">
                      <img src="https://img3.doubanio.com/f/movie/caa8f80abecee1fc6f9d31924cef8dd9a24c7227/pics/movie/ic_new.png" alt="" className="new"/>
                      谋杀议案
                    </span>
                    <strong>6.1</strong>
                  </p>
                </a>
                <a href="/" target="_blank" className="item">
                  <div className="cover-wp">
                    <img src="https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2559578757.jpg" alt="谋杀议案"/>
                  </div>
                  <p>
                    两大无猜
                    <strong>6.2</strong>
                  </p>
                </a>
              </div>
              <a className="more" href="javascript:;">加载更多</a>
            </div>
          </div>
          <div className="aside">
            <div className="doulist">
              <h2>热门豆列</h2>
              <ul>
                <li><div className="title"><a href="/">意外结局+高智商</a></div></li>
                <li><div className="title"><a href="/">【豆瓣高分纪录片/其它】(1/2)</a></div></li>
                <li><div className="title"><a href="/">黑色电影</a></div></li>
                <li><div className="title"><a href="/">【你连名字都那么牛逼】</a></div></li>
                <li><div className="title"><a href="/">100部载入影史的非英语电影</a></div></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Home;