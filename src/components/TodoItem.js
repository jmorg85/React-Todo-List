import React from 'react'

export const TodoItem = ({ task, deleteTask, toggleCompleted}) => {
    function handleChange() {
        toggleCompleted(task.id);
        //console.log("changed!");
    }
  return (
    <div className="todo-item">
    <input 
        type="checkbox"
        checked={task.completed}
        onChange={handleChange}
    />
    <p className={`${task.completed ? "todo-item-completed" : ""}`}>{task.text}</p>
    <button onClick={() => deleteTask(task.id)}>
        X
    </button>
    </div>
  );
}
export default TodoItem;
