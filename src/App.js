import React, { Component } from 'react';
import './global-css/reset.less'
import './global-css/common.less'
import './App.css';
import TodoList from './components/todoList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoList></TodoList>
      </div>
    );
  }
}

export default App;
