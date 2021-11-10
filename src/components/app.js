import React from "react";

import Search from "./search";
import Filter from "./filter";
import TodoList from "./todo-list";

const App = () =>  {
    return (
      <div>
        <Seartch/>
        <Filter/>
       < TodoList/>
      </div>
    )
  }

  export default App;