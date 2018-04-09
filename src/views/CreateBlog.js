import React, {Component} from 'react'
import {Upload, Icon} from 'antd'
import Quill from 'quill'
import 'quill/dist/quill.snow.css'
import '../views-css/CreateBlog.less'

const Dragger = Upload.Dragger
const props = {
  name: 'file',
  showUploadList: false,
  action: '/upload.do',
  accept: 'image/*'
}
const toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],
  ['blockquote', 'code-block'],
  
  [{'header': 1}, {'header': 2}],
  [{'list': 'ordered'}, {'list': 'bullet'}],
  [{'script': 'sub'}, {'script': 'super'}],
  [{'indent': '-1'}, {'indent': '+1'}],
  [{'direction': 'rtl'}],
  
  [{'size': ['small', false, 'large', 'huge']}],
  [{'header': [1, 2, 3, 4, 5, 6, false]}],
  
  [{'color': []}, {'background': []}],
  [{'align': []}],
  
  ['clean']
]

class CreateBlog extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  
  
  render() {
    return (
      <div className="create-blog tc">
        <div className="dragger-wrap">
          <Dragger {...props}>
            <p className="ant-upload-drag-icon">
              <Icon type="inbox"/>
            </p>
            <p className="ant-upload-text">Click or drag a file to upload as a major image</p>
            <p className="ant-upload-hint">Only PNG, JPG, JPEG, GIF accepted</p>
          </Dragger>
        </div>
        <div className="rich-text-wrap card tl">
          <div id="editor">
            <p>Hello World!</p>
            <p>Some initial <strong>bold</strong> text</p>
          </div>
        </div>
      </div>
    )
  }
  
  componentDidMount() {
    let quill = new Quill('#editor', {
      debug: 'info',
      modules: {toolbar: toolbarOptions},
      placeholder: 'Compose an epic...',
      readOnly: false,
      theme: 'snow'
    })
    console.log(quill)
  }
}

export default CreateBlog
