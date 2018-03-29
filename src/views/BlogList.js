import React, {Component} from 'react'
import {Icon} from 'antd'
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
      ],
      newEssay: [
        {
          id: '1',
          title: '如何搭建个人博客网站',
          views: 9527
        },
        {
          id: '2',
          title: '如何看待4.29晚小智于pdd的对喷',
          views: 9527
        },
        {
          id: '3',
          title: 'IT行业中个人如何选择发展方向',
          views: 9527
        }
      ],
      labelList: [
        {
          id: '1',
          name: 'CODING',
          type: 'code-o'
        },
        {
          id: '2',
          name: 'MOVIE',
          type: 'video-camera'
        },
        {
          id: '3',
          name: 'READING',
          type: 'profile'
        },
        {
          id: '4',
          name: 'GAME',
          type: 'rocket'
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
                  <li className="blog-item card" key={item.id}>
                    <BlogItem blogTitle={item.title} blogText={item.text}
                              blogPicture={item.picture}></BlogItem>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <div className="side-col">
          <div className="about-me mb-10 card">
            <table>
              <tbody>
              <tr>
                <td rowSpan={2}><img width="100px" className="wechat-qrcode"
                                     src={require('../assets/wechat-qrcode.png')} alt=""/></td>
                <td className="pl-20 vm">也</td>
              </tr>
              <tr>
                <td className="pl-20 vt">Wechat：yz101x</td>
              </tr>
              </tbody>
            </table>
          </div>
          <div className="new-essay card">
            <div className="new-essay-header">Newest</div>
            <ul className="new-essay-list c-black-65">
              {this.state.newEssay.map((item, index) => {
                return (
                  <li className="new-essay-item" key={item.id}>
                    <span className="mr-10">{item.title}</span>
                    <span className="ws-nowrap"><Icon className="view-icon" type="eye-o"/>{item.views}</span>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="label card">
            <div className="label-header">Label</div>
            <ul className="label-list">
              {this.state.labelList.map((item, index) => {
                return (
                  <li className="label-item dib" key={item.id}>
                    <Icon className="label-icon" type={item.type}/>
                    <p className="label-name">{item.name}</p>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
