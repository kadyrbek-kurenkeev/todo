import React from "react";

import Filter from "./filter";
import TodoList from "./todo-list";
import Search from "./search";

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