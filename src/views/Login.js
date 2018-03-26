import React, {Component} from 'react';
import LoginForm from '../components/LoginForm'
import '../views-css/Login.less'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="login">
        <div className="login-form-wrap">
          <LoginForm></LoginForm>
        </div>
      </div>
    )
  }
}

export default Login;
