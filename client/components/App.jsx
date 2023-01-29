import React, { useEffect, useState, useRef } from "react";
import TodoList from "./TodoList";

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

  function toggleTodo(id) {
    const newTodos = [...tasks]
    const tasks = newTodos.find(tasks => tasks.id === id)
    tasks.complete = !tasks.complete
    setTasks(newTodos)
  }

  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === '') return
    setTasks(prevTodos => {
      return [...prevTodos, { id: 1, name: name, complete: false}]
    })
    todoNameRef.current.value = null
  }

  function handleClearTodos() {
    const newTodos = tasks.filter(tasks => !tasks.complete)
    setTasks(newTodos)
  }

  return (
    <main>
      {tasks.map((tasks) => (
        <span className="task" key={tasks.id}>
          {tasks.description}
        </span>
      ))}
      <TodoList tasks={tasks} toggleTodo={toggleTodo} />
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={handleClearTodos}>Clear Complete</button>
      <div>{tasks.filter(tasks => !tasks.complete).length} left to do</div>
    </main>
  );
};

export default App;
