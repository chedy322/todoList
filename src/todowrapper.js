import React, { useState } from 'react';
import { Todoform } from './todoform'; // Assuming Todoform is a React component
import { Todo } from './todo'; // Assuming Todo is a React component
import { Edittodoform } from './edittodoform';
import { v4 as uuidv4 } from 'uuid';

export const Todowrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, { task: todo, id: uuidv4(), completed: false, isEditing: false}]);
    console.log(todos);
  };

  const handleDelete = (id) => {
    const updatedTask = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTask);
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  }

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <div className='TodoWrapper'>
      <h1>Get things Done!</h1>

      <Todoform addTodo={addTodo} />

      {todos.map((todo) =>
        todo.isEditing ? (
          <Edittodoform  editTodo={editTask} task={todo} />
        ) : (
          <Todo key={todo.id} task={todo} onDelete={() => handleDelete(todo.id)} editTodo={editTodo}/>
        )
      )}
    </div>
  );
};
// export default T
