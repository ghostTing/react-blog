import React, {Component} from 'react'
import {connect} from 'react-redux'
import {saveUsername} from '../store/actions'
import LoginForm from '../components/LoginForm'
import '../views-css/Login.less'

const mapStateToProps = (state) => ({
  username: state.blog.username
})
const mapDispatchToProps = (dispatch) => ({
  saveUsername(payload) {
    dispatch(saveUsername(payload))
  }
})

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  
  login(val) {
    this.props.saveUsername(val)
    this.props.history.push('/blog/home')
  }
  
  componentWillMount() {
  }
  render() {
    return (
      <div className="login">
        <div className="login-form-wrap">
          <div className="welcome-text mb-20">
            Welcome To YZ101X BLOG
          </div>
          <LoginForm login={this.login.bind(this)}></LoginForm>
        </div>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
