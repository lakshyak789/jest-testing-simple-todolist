import React, { Component } from "react";
import "./css/App.css";
class App extends Component {
  state = {
    idcounter: 0,
    text: "",
    todos: []
  };
  addTodos() {
    if (this.state.text !== "") {
      const todoarr = this.state.todos;
      let id = this.state.todos.map(todos => todos.id);
      let maxids = id.length > 0 ? Math.max(...id) : 0;
      todoarr.push({ id: maxids + 1, text: this.state.text });
      this.setState({ todos: todoarr });
      this.setState({ text: "" });
    }
  }
  handleChange(e) {
    this.setState({ text: e.target.value });
  }
  removeitem(e) {
    const todos = this.state.todos.filter(todos => todos.id != e.target.id);
    this.setState({ todos });
    console.log(e.target.id);
  }
  render() {
    const renderlist = this.state.todos.map(todolist => {
      return (
        <li className="list-items" key={todolist.id}>
          {todolist.text}
          <button
            id={todolist.id}
            className="remove-item"
            onClick={this.removeitem.bind(this)}
          >
            Remove
          </button>
        </li>
      );
    });
    return (
      <div className="app-class">
        <h1>Add Todos to List</h1>
        <hr />
        <div className="wrapper">
          <input
            type="text"
            className="text-box"
            value={this.state.text}
            onChange={this.handleChange.bind(this)}
          />
          <button className="add-todo" onClick={this.addTodos.bind(this)}>
            Add Todo
          </button>
        </div>
        <h2>Todo Items:</h2>
        <div className="todo-list">
          <ul>{renderlist}</ul>
        </div>
      </div>
    );
  }
}
export default App;
