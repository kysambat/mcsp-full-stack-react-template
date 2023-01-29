import React, { useEffect, useState, useRef } from "react";
import TodoList from "./TodoList";
import Task from "./tasks";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const todoNameRef = useRef()

  useEffect(() => {
    fetch("http://localhost:3000/api/tasks", {
      mode: "cors",
    })
      .then((res) => res.json())
      .then((tasks) => {
        setTasks(tasks);
      });
  }, []);


  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    fetch("http://localhost:3000/api/tasks", {
    method: "POST",
    body: JSON.stringify({description:name}),
    headers: {"Content-Type":"application/json"}

    })
      .then((res) => res.json())
      .then((tasks) => {
        setTasks(tasks);
      });
      console.log(tasks)

    refresh();
  }

  function refresh() {
    fetch("http://localhost:3000/api/tasks", {
    method: "GET"
    })
      .then((res) => res.json())
      .then((tasks) => {
        
      });
  }


  return (
    <main>
      <Task tasks={tasks} />
      <TodoList tasks={tasks} />
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add Todo</button>
    </main>
  );
};

export default App;
