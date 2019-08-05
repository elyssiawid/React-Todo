import React from "react";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <label>
            Task:
            <input
              type="text"
              value={this.props.todo.task}
              onChange={this.props.handleChange}
            />
          </label>
          <input type="submit" value="Add Todo" />
        </form>
        <button onClick={this.props.handleClear}> Clear Completed </button>
      </div>
    );
  }
}

export default TodoForm;
