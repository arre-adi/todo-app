import React, { useState } from "react";
import TaskCard from "./components/TaskCard";
import TextBox from "./components/TaskInput";
import "./App.css"

function App() {
  const [taskTodo, setTaskTodo] = useState([]); 

  const addTask = (inputTask) => {
    setTaskTodo([...taskTodo, inputTask]); 
  };

  return (
    <div>
      <TextBox addTask={addTask} />
      {taskTodo.map((task) => (
        <TaskCard key={task.serial} task={task} />
      ))}
    </div>
  );
}

export default App;
