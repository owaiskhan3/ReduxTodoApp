import React from "react";
import "./App.css";

import Header from "./Components/Header";
import AddTodo from "./Components/AddTodo";
import TodoList from "./Components/TodoLists";

function App() {
  return (
    <div className="App">
      <Header />
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
