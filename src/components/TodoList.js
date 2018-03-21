import React, {Component} from 'react';
import './TodoList.less'
import TodoItem from './TodoItem'

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [
        {
          eventId: '111',
          name: '做一个react的todoList demo',
          done: false
        },
        {
          eventId: '222',
          name: '列表渲染',
          done: false
        },
        {
          eventId: '333',
          name: 'ES6类的使用',
          done: true
        }
      ]
    };
  }

  toggleComplete(index) {
    this.state.todoList.forEach((ITEM, INDEX) => {
      if (INDEX === index) ITEM.done = !ITEM.done
    })
    this.setState({
      todoList: this.state.todoList
    })
  }

  del(index) {
    let todoList = this.state.todoList
    todoList.splice(index, 1)
    this.setState({
      todoList: todoList
    })
  }

  handleKeyDown(e) {
    if (e.keyCode === 13) {
      if (!e.target.value) return false
      let todoList = this.state.todoList
      todoList.unshift({
        eventId: new Date().getTime().toString(),
        name: e.target.value,
        done: false
      })
      this.setState({
        todoList: todoList
      })
      e.target.value = ''
    }
  }

  render() {
    return (
      <div className="todo-app">
        <div className="title">
          待办事项{this.props.match.params.id}
        </div>
        <input type="text" className="new-item" onKeyDown={this.handleKeyDown.bind(this)} placeholder="请输入事项"/>
        <ul className="todo-list">
          {
            this.state.todoList.map((item, index) => {
              return (
                <TodoItem eventItem={item}
                          toggleComplete={this.toggleComplete.bind(this, index)}
                          key={item.eventId}
                          del={this.del.bind(this, index)}></TodoItem>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default TodoList;
