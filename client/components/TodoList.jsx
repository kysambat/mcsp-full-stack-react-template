import React from 'react';
import Todo from './Todo';

export default function TodoList({ tasks }) {
    return (
      tasks.map(todo => {
        return <Todo key={tasks.id} tasks={tasks} />
      })
    )
  }