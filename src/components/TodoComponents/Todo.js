import React from "react";

class Todo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.list.task);
    return (
      <ul>
        <li>{this.props.list.task}</li>
      </ul>
    );
  }
}

export default Todo;
