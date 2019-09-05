import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Radio } from "antd";
import "./index.scss";

const RadioGroup = Radio.Group;

class More extends PureComponent {
  render() {
    return (
      <div id="more">
        <h1>选电影</h1>
        <div className="content">
          <div className="tag_list">
            <span className="cate activate">啊啊</span>
          </div>

          <div className="sort">
            <RadioGroup>
              <Radio>按热度排序</Radio>
              <Radio>按时间排序</Radio>
              <Radio>按评价排序</Radio>
            </RadioGroup>
          </div>

          {/* <div className="list">
            {hotMovies.map((item, index) => (
              <div className="item" key={item.id}>
                <div className="cover-wp">
                  <img src={item.cover} alt={item.title} />
                </div>
                <p>
                  <span className="green">
                    {item.is_new ? (
                      <img
                        src="https://img3.doubanio.com/f/movie/caa8f80abecee1fc6f9d31924cef8dd9a24c7227/pics/movie/ic_new.png"
                        className="new"
                        alt=""
                      />
                    ) : (
                      ""
                    )}
                    {item.title}
                  </span>
                  <strong>{item.rate}</strong>
                </p>
              </div>
            ))}
          </div> */}

          {/* <Link to={`more`} className='more'>加载更多</Link> */}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({});
export default connect(mapStateToProps)(More);
