import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form";
import { initialState, reducer } from "./reducers/reducer";

function App() {
  const [todoItem, setTodoItem] = useState(initialState);
  console.log(todoItem);

  const handleChange = e => {
    e.preventDefault();
    setTodoItem({
      [e.target.name]: e.target.value,
      completed: false,
      id: Math.floor(Math.random() * 10000000000)
    });
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <Form handleChanges={handleChange} />
    </div>
  );
}

export default App;
