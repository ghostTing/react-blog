import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {Icon} from 'antd'
import './BlogItem.less'

class BlogItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (
      <div className="blog-list">
        <header className="blog-title mb-10">
          {this.props.blogTitle}
        </header>
        <article className="blog-content mb-10">
          <p className="blog-text c-black-65">
            {this.props.blogText}
          </p>
          <img className="blog-inset"
               src={this.props.blogPicture}
               alt=""/>
        </article>
        <footer>
          <div className="blog-modify-time mb-10">
            {'编辑于 2018-03-19'}
          </div>
          <div className="blog-operation-list">
                  <span className="blog-operation-item">
                    <Icon type="like-o"/>
                    <span>100</span>
                  </span>
            <span className="blog-operation-item">
                    <Icon type="dislike-o"/>
                    <span>2</span>
                  </span>
            <span className="blog-operation-item">
                    <Icon type="message"/>
                    <span>{76} Comments</span>
                  </span>
            <span className="blog-operation-item">
                    <Icon type="share-alt"/>
                    <span>Share</span>
                  </span>
            <span className="blog-operation-item">
                    <Icon type="star-o"/>
                    <span>Mark</span>
                  </span>
            <span className="blog-operation-item">
                    <Icon type="heart-o"/>
                    <span>Thanks</span>
                  </span>
          </div>
        </footer>
      </div>
    )
  }
}

BlogItem.propTypes = {
  blogTitle: PropTypes.string.isRequired,
  blogText: PropTypes.string.isRequired,
  blogPicture: PropTypes.string
}

export default BlogItem;
