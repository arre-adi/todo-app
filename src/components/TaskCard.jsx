import React, { useState } from "react";

import "./TaskCard.css";

const TaskCard = ({ task, onDelete }) => {
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
      <button
        className="delete-btn"
        onClick={() => onDelete(task.serial)}> delete
      </button>
    </div>
  );
};

export default TaskCard;