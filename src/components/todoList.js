import React, {Component} from 'react';
import './todoList.less'

class TodoList extends Component {
  render() {
    return (
      <div className="todo-app">
        <div className="title">
          待办事项
        </div>
        <input type="text" className="new-item" placeholder="请输入事项" />
        <ul className="todo-list">
          <li className="todo-item">
            <input type="checkbox" className="todo-checkbox" />
            <span className="item-name">
              做一个react的todoList demo
            </span>
            <i className="iconfont icon-close fr"></i>
          </li>
        </ul>
      </div>
    )
  }
}
export default TodoList;
