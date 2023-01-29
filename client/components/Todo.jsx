import React from 'react';

export default function Todo({ tasks, toggleTodo }) {
    function handleTodoClick() {
      toggleTodo(tasks.id)
    }
    
    return (
      <div>
        <label>
          <input type="checkbox" checked={tasks.complete} onChange={handleTodoClick} />
          {tasks.name}
        </label>
      </div>
    )
  }