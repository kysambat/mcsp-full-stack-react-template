import React from 'react';

export default function Task(props) {
    return (
        <div>
        {props.tasks.map((task) => (
            <span className="task" key={task.id}>
              {task.description}
            </span>
          ))}
        </div>
        )
  }



