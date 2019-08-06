import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm.js";
import "./components/TodoComponents/Todo.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: {
        task: "",
        id: "",
        completed: false
      },
      todo: [
        {
          task: "Organize Garage",
          id: 1528817077286,
          completed: false
        }
      ]
    };
  }

  handleChange = event => {
    event.preventDefault();
    this.setState({
      task: {
        [event.target.name]: event.target.value,
        id: Date.now(),
        completed: false
      }
    });
  };

  handleClear = () => {
    this.setState({
      todo: [
        {
          task: "Organize Garage",
          id: 1528817077286,
          completed: false
        }
      ]
    });
  };

  handleDelete = id => {
    const filtertodos = this.state.todo.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      todo: filtertodos
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      task: {},
      todo: [...this.state.todo, this.state.task]
    });
  };
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList list={this.state.todo} delete={this.handleDelete} />
        <TodoForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          todo={this.state.todo}
          clear={this.handleClear}
        />
      </div>
    );
  }
}

export default App;
