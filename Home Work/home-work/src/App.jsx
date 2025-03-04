
import ProductsRender from "./Products";
import React, { useState } from "react";
import './App.css';

const tasks = [
  {id: 1, title:'Study react', completed: true},
  {id: 2, title:'Completed task', completed: false},
  {id: 3, title:'Reading book', completed: false}
];

function App() {
  const newTasks = tasks.map((task) => 
    <li key={task.id}>
      {task.completed ? <s>{task.title}</s> : task.title}
    </li>
  );

  const [count, setCount] = useState(0);
  
  function add() {
    setCount(count+1)
  }

  function min() {
    setCount(count-1)
  }

  return (
    
    <div className="container">
        <h1>Task 1</h1>

      <ul>{newTasks}</ul>

      <h1>Task 2</h1>

      <h1>Count {count}</h1>
      <button onClick={add}>Add</button>
      <button onClick={min}>Min</button>

      <ProductsRender />
    </div>
  );
}

export default App;

