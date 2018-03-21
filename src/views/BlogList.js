import React, {Component} from 'react';
import {Icon} from 'antd'
import '../views-css/BlogList.less'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="blog-list">
        <div className="main">
          <ul className="blog">
            <li className="blog-item">
              <header className="blog-title mb-10">
                《芳华》――小萍，愿你被世界温柔以待
              </header>
              <article className="blog-content mb-10">
                <p className="blog-text">
                  我已经很久不去电影院，但是《芳华》预告出来后，我一直很期待。虽然冯导上部《我不是潘金莲》让人略感失望，但他仍是我最喜爱的导演之一。因为没有合适的同伴，我是一个人去看的。看的时候几次要落泪。 我不喜欢写影评。在我内心里无论怎么欢欣愉悦愤慨恼怒，写评论时总会习惯性克制的波澜不惊，可能感情在观看时已经宣泄完，任我手写我心，却再也写不出当时的心情。
               </p>
                <img className="blog-inset" src="https://upload-images.jianshu.io/upload_images/10729251-fda71e93d02e25dc.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240" alt=""/>
              </article>
              <footer>
                <div className="blog-modify-time mb-10">
                  {'编辑于 2018-03-19'}
                </div>
                <div className="blog-operation-list">
                  <span className="blog-operation-item">
                    <Icon type="like-o" />
                    <span>100</span>
                  </span>
                  <span className="blog-operation-item">
                    <Icon type="dislike-o" />
                    <span>2</span>
                  </span>
                  <span className="blog-operation-item">
                    <Icon type="message" />
                    <span>{76} Comments</span>
                  </span>
                  <span className="blog-operation-item">
                    <Icon type="share-alt" />
                    <span>Share</span>
                  </span>
                  <span className="blog-operation-item">
                    <Icon type="star-o" />
                    <span>Mark</span>
                  </span>
                  <span className="blog-operation-item">
                    <Icon type="heart-o" />
                    <span>Thanks</span>
                  </span>
                </div>
              </footer>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Login;
