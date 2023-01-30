import React from 'react';

export default function Task(props) {
    return (
        <div>
        {props.tasks.map((task) => (
            <span className="task" key={task.id}>
             <ul>{task.id} </ul>
             <ul> {task.description}</ul>
            </span>
          ))}
        </div>
        )
  }



