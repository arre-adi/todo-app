import React, { useState } from "react";
import "./TaskCard.css"


const TextBox = ({ addTask }) => {
  const [task, setTask] = useState("");
  const [serialCounter, setSerialCounter] = useState(1);

  const handleSubmit = () => {
      if(task !== ""){
      addTask({ serial:serialCounter, description: task }); 
      setTask(""); 
      setSerialCounter(serialCounter+1);
      }else{
        alert("task add kar lawde")
      }
  
  };

  return (
    <div className="inputSection">
      <input type="text" placeholder="Enter task" value={task} onChange={(e) => setTask(e.target.value)}/>
      <button onClick={handleSubmit}>Add Task</button>
    </div>
  );
}; 

export default TextBox;
