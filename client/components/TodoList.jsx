import React from 'react';
import Todo from './Todo';

export default function TodoList({ tasks, toggleTodo }) {
    return (
      tasks.map(todo => {
        return <Todo key={tasks.id} toggleTodo={toggleTodo} tasks={tasks} />
      })
    )
  }