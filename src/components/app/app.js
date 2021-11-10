import React from "react";

import Filter from "../filter/filter";
import TodoList from "../todo-list/todo-list";
import Search from "../search/search";

const App = () =>  {
    return (
      <div>
        <Search/>
        <Filter/>
       < TodoList/>
      </div>
    )
  }

  export default App;