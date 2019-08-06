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
              name="task"
              type="text"
              value={this.props.todo.task}
              onChange={this.props.handleChange}
            />
          </label>
          <input type="submit" value="Add Todo" />
          <button onClick={this.props.clear}> Clear Completed </button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
