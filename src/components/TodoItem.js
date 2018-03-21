import React, {Component} from 'react';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  checkboxClick(e) {
  }

  deleteTask(e) {
    e.stopPropagation()
    this.props.del()
  }

  render() {
    return (
      <li className="todo-item" onClick={this.props.toggleComplete}>
        <input type="checkbox" checked={this.props.eventItem.done} onChange={this.checkboxClick}
               className="todo-checkbox"/>
        <span className={'item-name' + (this.props.eventItem.done && ' del')}>
          {this.props.eventItem.name}
        </span>
        <i className="iconfont icon-close fr" onClick={this.deleteTask.bind(this)}></i>
      </li>
    )
  }
}

export default TodoItem;
