import React, { Component } from "react";
import { extendObservable, action, observable } from "mobx";
import { observer, inject } from "mobx-react";
import Todo from "./Todo";

@inject("TodoListStore")
@observer
class TodoList extends Component {
  @observable newTodoTitle = "";
  // constructor() {
  //   super();
  //
  //   extendObservable(this, {
  //     newTodoTitle: "",
  //     handleInputChange: action((e) => {
  //       this.newTodoTitle = e.target.value
  //     })
  //   })
  // }

  @action
  handleInputChange = e => {
    this.newTodoTitle = e.target.value;
  };

  @action
  handleFormSubmit = e => {
    console.log(this.props.TodoListStore);
    e.preventDefault();
    this.props.TodoListStore.addTodo(this.newTodoTitle);
    console.log(this.props.TodoListStore.todos);

    this.newTodoTitle = "";
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          New Todo:
          <input
            type="text"
            value={this.newTodoTitle}
            onChange={this.handleInputChange}
          />
          <button type="submit">Add</button>
        </form>
        <hr />
        <ul>
          {this.props.TodoListStore.todos.map(todo => (
            <Todo todo={todo} key={todo.id} />
          ))}
        </ul>
        Tasks left: {this.props.TodoListStore.unfinishedTodoCount}
      </div>
    );
  }
}

export default TodoList;
