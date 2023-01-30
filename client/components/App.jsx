import React, { useEffect, useState, useRef } from "react";
import Task from "./tasks";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
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


  function addTodo(e) {
    fetch("http://localhost:3000/api/tasks", {
    method: "POST",
    body: JSON.stringify({description:input}),
    headers: {"Content-Type":"application/json"}

    })
      .then((res) => res.json())
      .then((tasks) => {
        setTasks(tasks);
        location.reload();
      });
  }

  function setChange() {
    const name = todoNameRef.current.value
    setInput(name);
    
  }

  return (
    <main>
      <Task tasks={tasks} />
      <input onChange={setChange} ref={todoNameRef} type="text" />
      <button onClick={addTodo}>Add Todo</button>
    </main>
  );
};

export default App;
