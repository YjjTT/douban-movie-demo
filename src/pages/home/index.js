import React, { Component } from 'react'
import './index.scss';
import { Radio, Checkbox } from 'antd';
import axios from 'axios'
import { connect } from 'react-redux'  
import { Link } from 'react-router-dom'


const Group = Radio.Group;
const CheckGroup = Checkbox.Group;

const plainOptions = ['我没看过的', '可在线播放'];
const defaultCheckedList = [];

class Home extends Component {

  constructor(){
    super();
    this.state = {
      hotMovieTags: [],
      hotMovies: [],
      currentMovieTagIndex: 0
    }
  }
  componentWillMount(){

    this.loadHotMovieTags()
  }
  // 热门标签电影
  loadHotMovieTags(){
    axios({
      method: 'get',
      url: '/apb/j/search_tags?type=movie&source=index'
    }).then(res=>{
      if(res.status === 200){
        this.setState({
          hotMovieTags: res.data.tags
        })
        this.loadHotMoives(res.data.tags[this.state.currentMovieTagIndex])
      }
    })
  }
  // 热门电影标签点击
  handleClickHotMovieTagClick = (index) => {
    this.setState({
      currentMovieTagIndex: index
    })
    this.loadHotMoives(this.state.hotMovieTags[index])
  }
  // 获取热门电影
  loadHotMoives(tag){
    axios({
      method: 'get',
      url: `/apb/j/search_subjects?type=movie&tag=${tag}&page_limit=50&page_start=0`
    }).then(res=>{
      if(res.status === 200){
        const result = res.data.subjects
        this.setState({
          hotMovies: result
        })
      }
    })
  }
  render () {
    const { hotMovieTags,hotMovies } = this.state;
    return (
      <div className="wrapper">
        <div className="content clearfix">
          <h1>选电影</h1>
          <div className='article'>
            <div className="filter">
              <div className="tags">
                <div className="tag_list">
                  {
                    hotMovieTags.map((item, index) => (
                      <span onClick={this.handleClickHotMovieTagClick.bind(this, index)} className={`cate ${index===this.state.currentMovieTagIndex?'activate':''}`} key={index}>{item}</span>
                    ))
                  }
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
                {
                  hotMovies.map((item, index) => (
                      <div className='item' key={item.id}>
                          <div className="cover-wp">
                              <img src={item.cover} alt={item.title}/>
                          </div>
                          <p>
                              <span className='green'>
                                  {item.is_new?
                                  <img 
                                  src='https://img3.doubanio.com/f/movie/caa8f80abecee1fc6f9d31924cef8dd9a24c7227/pics/movie/ic_new.png' 
                                  className='new'
                                  alt="" 
                                  /> :
                                  ''}
                                  {item.title}
                              </span>
                              <strong>{item.rate}</strong>
                          </p>
                      </div>
                  ))
                }
              </div>
              <a className="more" href="javascript:;">加载更多</a>
            </div>
          </div>
          <div className="aside">
            <div className="doulist">
              <h2>热门豆列</h2>
              <ul>
                <li>
                  <span>2191推荐</span>
                  <div className="title"><a href="/">意外结局+高智商</a></div>
                </li>
                <li>
                  <span>2191推荐</span> 
                  <div className="title"><a href="/">【豆瓣高分纪录片/其它】(1/2)</a></div>
                </li>
                <li>
                  <span>2191推荐</span>
                  <div className="title"><a href="/">黑色电影</a></div>
                </li>
                <li>
                  <span>2191推荐</span>
                  <div className="title"><a href="/">【你连名字都那么牛逼】</a></div>
                </li>
                <li>
                  <span>2191推荐</span>
                  <div className="title"><a href="/">100部载入影史的非英语电影</a></div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
}

export default Home;