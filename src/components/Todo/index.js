import React, { Component } from 'react'
import Footer from './Footer'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'

class TodoApp extends Component {

  constructor(props){
    super(props);
    console.log(props);
    this.status = {
      todos: props.todolist || []
    }
  }

  render(){
    return (
      <div>
        <AddTodo />
        <VisibleTodoList/>
        <Footer />
      </div>
    )
  }

}

export default TodoApp