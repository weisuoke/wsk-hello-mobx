import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { observer, inject } from "mobx-react";
import Fun from "./Fun";
import TodoList from "./components/TodoList";
import Topic from "./components/Topic";

import ReviewApp from "./components/ReviewApp";

@inject("BirdStore", "TodoListStore")
@observer
class App extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    const bird = this.bird.value;
    this.store.addBird(bird);
  };

  get store() {
    return this.props.BirdStore;
  }

  render() {
    console.log(this.props);
    return (
      <div className="container">
        <ReviewApp />
        <header className="App-header">
          <Topic />
          <TodoList />
          {/* <Fun /> */}
          <p>{this.store.firstBird}</p>
          <form onSubmit={e => this.handleSubmit(e)}>
            <input
              type="text"
              placeholder="Enter your bird name"
              ref={input => (this.bird = input)}
            />
            <button>Add Bird</button>
          </form>
        </header>
      </div>
    );
  }
}

export default App;
