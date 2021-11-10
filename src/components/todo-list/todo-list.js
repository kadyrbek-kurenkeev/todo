import React from "react"
import TodoListItem from "../todo-list-item";

const TodoList = () => {
    return (
      <div>
        <ul>
          <li><TodoListItem label={TodoList[0].label}/></li>
          <li><TodoListItem label={TodoList[1].label}/></li>
          <li><TodoListItem label={TodoList[2].label}/></li>
        </ul>
      </div>
    )
  }

  export default TodoList;