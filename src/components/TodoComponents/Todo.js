import React from "react";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: { task: "" }
    };
  }
  render() {
    console.log(this.props.list);
    console.log(this.props.list.task);
    return (
      <ul>
        <li onClick={this.props.onClick}>{this.props.list.task}</li>
      </ul>
    );
  }
}

export default Todo;
