import React, { useState } from "react";
import "./TaskCard.css";

const TaskCard = ({ task }) => {
  const [status, setStatus] = useState(false);

  const handleStatus = () => {
    setStatus(!status);
  };

  return (
    <div className="taskCard">
      <div className="check-btn">
        <input type="checkbox" checked={status} onChange={handleStatus} />
      </div>
      <h3>{task.serial}</h3>
      <h3 style={{ textDecoration: status ? "line-through" : "none" }}>
        {task.description}
      </h3>
    </div>
  );
};

export default TaskCard;
