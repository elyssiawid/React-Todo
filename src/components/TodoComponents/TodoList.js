import React from "react";
import Todo from "./Todo.js";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("ALOHA", this.props.list);
    return (
      <div>
        <>
          {this.props.list.map(item => (
            <Todo key={item.id} list={this.props.list} />
          ))}
        </>
      </div>
    );
  }
}

export default TodoList;
