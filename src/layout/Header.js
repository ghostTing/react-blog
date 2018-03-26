import React, {Component} from 'react';
import {Link} from "react-router-dom";

import './Header.less'
import {Menu, Icon} from 'antd';

// const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  
  handleClick = (e) => {
    this.setState({
      current: e.key
    });
  }
  
  render() {
    return (
      <div className="header">
        <Menu
          onClick={this.handleClick}
          mode="horizontal"
          selectable={false}
          theme="dark"
        >
          <Menu.Item key="home">
            <Link to="/blog/home"><Icon type="home"/>HOME</Link>
          </Menu.Item>
          <Menu.Item key="topic">
            <Link to="/blog/topic"><Icon type="tag-o"/>TOPIC</Link>
          </Menu.Item>
          <Menu.Item className="login-nav-item" key="login">
            <Link to="/"><Icon type="user"/>LOG IN</Link>
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}

export default Header
