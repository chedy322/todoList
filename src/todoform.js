import React,{useState} from 'react';

export const Todoform = ({addTodo}) => {
  const[value,setValue]=useState("");
  const handleSubmit=(e)=>{
    e.preventDefault();
    if (!value){
      return alert("please enter a task")
    }
    addTodo(value)
    setValue("")


  }
  
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input type="text" className='todo-input' placeholder="What is the task today..." value={value} onChange={(e)=>setValue(e.target.value)}/>       
      <button type="submit" className='todo-btn'>Add Task</button>
    </form>
  )
}

// export default T
