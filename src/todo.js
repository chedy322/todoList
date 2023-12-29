import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

export const Todo = ({ task, index,onDelete,editTodo }) => {
  const [completed, setCompleted] = useState(task.completed);

  const toggleComp = () => {
    // Toggle the completion status and update the state
    setCompleted(!completed);
  };
  return (
    <div className="Todo">
      <p onClick={toggleComp} className={`${completed ? 'completed' : ''}`}>
        {task.task}
      </p>
      <div>
        <FontAwesomeIcon icon={faPenToSquare} onClick={()=>editTodo(task.id,task.task)}/>
        <FontAwesomeIcon icon={faTrash} onClick={()=>onDelete(task.id)}/>
      </div>
    </div>
  );
};

// export default Todo
