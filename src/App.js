import React, {Component} from 'react';
import Router from './router'
import './global-css/reset.less'
import './global-css/common.less'
import './App.css';
import './global-css/theme.less'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router></Router>
      </div>
    );
  }
}

export default App;
