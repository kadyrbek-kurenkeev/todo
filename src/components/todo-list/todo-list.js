import React from "react"
import TodoListItem from "../todo-list-item";

const TodoList = () => {
    return (
      <div>
        <ul>
          <li><TodoListItem label={"task 1"}/></li>
          <li><TodoListItem label={"task 2"}/></li>
          <li><TodoListItem label={"task 3"}/></li>
        </ul>
      </div>
    )
  }

  export default TodoList;