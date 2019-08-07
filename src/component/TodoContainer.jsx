import React, { Component } from "react";
import TodoList from "./TodoList";
import Add from "./Add";
import Todo from "./Todo";

// const mockList = [
//   {
//     id: 1,
//     title: "1",
//     content: "내용1",
//     category: "",
//     createDate: new Date(),
//     editDate: "",
//     done: true
//   },
//   {
//     id: 2,
//     title: "2",
//     content: "내용2",
//     category: "",
//     createDate: new Date(),
//     editDate: "",
//     done: false
//   },
//   {
//     id: 3,
//     title: "3",
//     content: "내용3333333333",
//     category: "",
//     createDate: new Date(),
//     editDate: "",
//     done: false
//   }
// ];
const mockList = '';

class TodoContainer extends Component {

  state = {
    todoList: (Array.isArray( mockList ) && mockList) || [],
    value: '',
  };

  title = "오늘할일";
  todoCount = this.state.todoList.length;

  initTodo = (value) => {
    return {
      id: 0,
      title: "",
      content: value,
      category: "",
      createDate: new Date(),
      editDate: "",
      done: false
    };
  };

  setTodo = (value) => {
    const id = this.todoCount + 1;
    this.todoCount = id;

    return {
      id,
      title: "",
      content: value,
      category: "",
      createDate: new Date(),
      editDate: ""
    }
  };

  updateTodoList = (todoList, id, fnc) => {
    return todoList.map( (item) => {
      if ( item.id === id ){
        return fnc( item );
      }
      return item;
    } );
  };

  onClickAdd = (value) => () => {
    this.setState( ({ todoList }) => {
      let todo;

      if ( todoList.length ){
        todo = this.setTodo( value )
      } else {
        todo = this.initTodo( value );
      }

      return {
        todoList: [ ...todoList, todo ],
        value: ''
      }
    } );
  };

  onChange = ({ target: { value } }) => {
    this.setState( { value } );
  };

  onClickDelete = (id) => () => {
    this.setState( ({ todoList }) => {
      const filterTodo = todoList.filter( (item) => {
        return item.id !== id;
      } );

      return {
        todoList: filterTodo
      }
    } );
  };

  onClickDone = (id) => () => {
    this.setState( ({ todoList: list }) => {
      const todoList = this.updateTodoList(
        list,
        id,
        (item) => ({ ...item, done: !item.done }) );

      return {
        todoList
      }
    } )
  };

  render(){
    const { value, todoList } = this.state;

    return (
      <Todo>
        <Add
          value={ value }
          onChange={ this.onChange }
          onClickAdd={ this.onClickAdd }
        />
        <TodoList
          todoList={ todoList }
          onClickDone={ this.onClickDone }
          onClickDelete={ this.onClickDelete }
        />
      </Todo>
    )
  }
}

export default TodoContainer;
