import React from "react";

import Filter from "../filter/filter";
import TodoList from "../todo-list/todo-list";
import Search from "../search/search";

const App = () =>  {

  const todos = [
    {id: 1, label:"drink vodka", important: false, done: false},
    {id: 1, label:"drink tequila", important: false, done: false},
    {id: 1, label:"drink tan", important: false, done: false},

  ]

    return (
      <div>
        <Search/>
        <Filter/>
       < TodoList todos={todos}/>
      </div>
    )
  }

  export default App;