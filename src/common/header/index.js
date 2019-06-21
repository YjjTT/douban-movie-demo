import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './index.scss'
import { Input } from 'antd';

const Search = Input.Search;

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <div className='header_top'>
          <ul>
            <li><a href="/">豆瓣</a></li>
            <li><a href="/">读书</a></li>
            <li><a href="/">音乐</a></li>
            <li><a href="/">小组</a></li>
            <li><a href="/">阅读</a></li>
            <li><a href="/">时间</a></li>
          </ul>
        </div>
        <div className='header_search'>
          <a className='header_title' href='/'>豆瓣电影</a>
          <Search 
            style={{width: 450}} 
            className='searchInput' 
            placeholder='搜索电影、电视剧、综艺、影人'
            enterButton
            />
        </div>
        <div className='header_line'></div>
        <div>
          <ul className="header_cat">
            <li><a href='/'>影讯&购票</a></li>
            <li><a href='/'>选电影</a></li>
            <li><a href='/'>电视剧</a></li>
            <li><a href='/'>排行榜</a></li>
            <li><a href='/'>分类</a></li>
            <li><a href='/'>影评</a></li>
            <li><a href='/'>2018年度榜单</a></li>
            <li><a href='/'>2018书影音报告</a></li>
          </ul>
          <a href='/' className='movieannual2018'> </a>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {

  }
}
const mapDispatchToProps = (dispatch) => {
  return {

  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);