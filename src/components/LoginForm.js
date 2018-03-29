import React, {Component} from 'react'
import {Form, Icon, Input, Button, Checkbox} from 'antd'
import axios from 'axios'
import './LoginForm.less'

const FormItem = Form.Item

class NormalLoginForm extends Component {
  constructor(props, context) {
    super(props)
    this.state = {}
  }
  
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        axios.post('/user', {
          username: values.userName,
          password: values.password
        }).then(data => {
          if (data.data.code === 200) {
            this.props.login(values.userName)
          }else if (data.data.code === 501) {
            /* 用户名不存在 */
            this.props.form.setFields({
              userName: {
                value: values.userName,
                errors: [new Error(data.data.message)]
              }
            })
          } else if (data.data.code === 500) {
            /* 密码错误 */
            this.props.form.setFields({
              password: {
                value: values.password,
                errors: [new Error(data.data.message)]
              }
            })
          }
        })
      }
    })
  }
  
  render() {
    const {getFieldDecorator} = this.props.form
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{required: true, message: 'Please input your username!'}]
          })(
            <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>} placeholder="Username"/>
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{required: true, message: 'Please input your Password!'}]
          })(
            <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password"
                   placeholder="Password"/>
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <a className="login-form-forgot" href="">Forgot password</a>
          <Button type="primary" htmlType="submit" className="login-form-button fr">
            Log in
          </Button>
        </FormItem>
      </Form>
    )
  }
}

const LoginForm = Form.create()(NormalLoginForm)


export default LoginForm
