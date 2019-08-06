import React from "react";
import Todo from "./Todo";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("ALOHA", this.props.list);
    return (
      <div>
        {this.props.list.map(item => (
          <Todo
            key={item.id}
            list={item}
            onClick={() => this.props.delete(item.id)}
          />
        ))}
      </div>
    );
  }
}

export default TodoList;
