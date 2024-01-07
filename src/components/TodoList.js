import React, {useState} from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = () => {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Doctor Appointment',
            completed: true
            },
            {
            id: 2,
            text: 'Meeting at School',
            completed: false
            }
    ]);

    const [text, setText] = useState('');
    function addTask(text) {
        const newTask = {
            id: Date.now(),
            text,
            completed: false
        };
        setTasks([...tasks, newTask]);
        setText('');
    }

    function deleteTask(id) {
        setTasks(tasks.filter(tasks => tasks.id !== id));
    }

    function toggleCompleted(id) {
        setTasks(tasks.map(task => {
            if(task.id === id) {
                console.log("We made it here.");
                return {...task, completed: !task.completed};
            }
            else {
                console.log("We didn't do it.");
                return task;
            }
        }));
    }
  return (
    <div className="todo-list">
        {tasks.map(task => (
            <TodoItem key={task.id} task={task} deleteTask={deleteTask} toggleCompleted={toggleCompleted} />
        ))}
        <input value={text} onChange={e => setText(e.target.value)} />
        <button onClick={() => addTask(text)}>Add</button>
    </div>
  );
}

export default TodoList;
