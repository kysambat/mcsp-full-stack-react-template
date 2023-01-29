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


  function handleAddTodo(e) {
    fetch("http://localhost:3000/api/tasks", {
    method: "POST",
    body: JSON.stringify({description:input}),
    headers: {"Content-Type":"application/json"}

    })
      .then((res) => res.json())
      .then((tasks) => {
        setTasks(tasks);
        location.reload();
        console.log("hi")
      });
     console.log(tasks)

  }

  function setChange() {
    const name = todoNameRef.current.value
    setInput(name);
    
  }

  // function refresh() {
  //   fetch("http://localhost:3000/api/tasks", {
  //   method: "GET"
  //   })
  //     .then((res) => res.json())
  //     .then((tasks) => {
        
  //     });
  // }


  return (
    <main>
      <Task tasks={tasks} />
      <input onChange={setChange} ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add Todo</button>
    </main>
  );
};

export default App;
