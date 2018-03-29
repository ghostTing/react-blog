import React, {Component} from 'react';
import Router from './router'
import './App.less';

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
