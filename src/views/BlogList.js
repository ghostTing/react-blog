import React, {Component} from 'react'
// import {Icon} from 'antd'
import '../views-css/BlogList.less'
import BlogItem from '../components/BlogItem'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      blogList: [
        {
          id: '1',
          title: '《看不见的客人》：你以为你比我聪明吗？',
          text: '《看不见的客人》是去年（2017年）上映的西班牙影片，导演和编剧都是奥里奥尔.保罗。故事情节类似《嫌疑犯人X》，可以猜到事情的真相，但真相被凶手用谎言和非法手段严密包裹住了。',
          picture: '//upload-images.jianshu.io/upload_images/8470191-2de64d45e0355daa.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/550'
        },
        {
          id: '2',
          title: '《看不见的客人》：你以为你比我聪明吗？',
          text: '《看不见的客人》是去年（2017年）上映的西班牙影片，导演和编剧都是奥里奥尔.保罗。故事情节类似《嫌疑犯人X》，可以猜到事情的真相，但真相被凶手用谎言和非法手段严密包裹住了。',
          picture: '//upload-images.jianshu.io/upload_images/8470191-2de64d45e0355daa.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/550'
        },
        {
          id: '3',
          title: '《看不见的客人》：你以为你比我聪明吗？',
          text: '《看不见的客人》是去年（2017年）上映的西班牙影片，导演和编剧都是奥里奥尔.保罗。故事情节类似《嫌疑犯人X》，可以猜到事情的真相，但真相被凶手用谎言和非法手段严密包裹住了。',
          picture: '//upload-images.jianshu.io/upload_images/8470191-2de64d45e0355daa.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/550'
        }
      ]
    }
  }
  
  render() {
    return (
      <div className="blog-list">
        <div className="main">
          <ul className="blog">
            {
              this.state.blogList.map((item, index) => {
                return (
                  <li className="blog-item" key={item.id}>
                    <BlogItem blogTitle={item.title} blogText={item.text}
                              blogPicture={item.picture}></BlogItem>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default Login
