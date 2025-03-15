import React, { useState } from "react";
import "./TaskCard.css";

const TaskInput = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleSubmit = () => {
    if (task.trim() !== "") {
      addTask(task);
      setTask("");
    } else {
      alert("Please enter a task");
    }
  };

  return (
    <div className="inputSection">
      <input
        type="text"
        placeholder="Enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleSubmit}>Add Task</button>
    </div>
  );
};

export default TaskInput;