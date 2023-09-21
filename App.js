import React, { Component } from "react";
import { ReactDOM } from "react";
import NavBar from "./components/NavBar";
import ToDoItem from "./components/ToDoItem";
import ToDoData from "./components/ToDoData";
import Footer from "./components/Footer";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: ToDoData,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    //We are looking at the previous state of the array & it mirrors it previously however, the id that we get through handleChange is
    //checking if checking if it's true or false / false to true. then it replaces the original array and displayed
    this.setState((prevState) => {
      const updatedToDos = prevState.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        todos: updatedToDos,
      };
    });
  }

  render() {
    //the handleChange then gets passed to every single ToDoItem we have
    const todoItems = ToDoData.map((item) => (
      <ToDoItem key={item.id} item={item} handleChange={this.handleChange} />
    ));

    return (
      <div>
        <NavBar />
        <div className="todo-list">{todoItems}</div>
        <Footer />
      </div>
    );
  }
}

export default App;
