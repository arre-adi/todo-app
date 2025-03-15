import React, { useState } from "react";
import TaskCard from "./components/TaskCard";
import TaskInput from "./components/TaskInput"; 
import "./App.css";

function App() {
  const [taskTodo, setTaskTodo] = useState([]);
  const [nextSerial, setNextSerial] = useState(1);

  const addTask = (taskDescription) => {
    const newTask = {
      serial: nextSerial,
      description: taskDescription
    };
    setTaskTodo([...taskTodo, newTask]);
    setNextSerial(nextSerial + 1);
  };

  const deleteTask = (taskId) => {
    const filteredTasks = taskTodo.filter(task => task.serial !== taskId);
    

    const updatedTasks = filteredTasks.map((task, index) => ({
      ...task,
      serial: index + 1
    }));
    
    if (updatedTasks.length > 0) {
      setNextSerial(updatedTasks.length + 1);
    } else {
      setNextSerial(1); 
    }
    
    setTaskTodo(updatedTasks);
  };

  return (
    <div className="app-container">
      <h1>Todo List</h1>
      <TaskInput addTask={addTask} />
      <div className="tasks-container">
        {taskTodo.map((task) => (
          <TaskCard 
            key={task.serial} 
            task={task} 
            onDelete={deleteTask}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
