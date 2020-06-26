import React, { useState } from "react";
import ReactDOM from "react-dom";
import TaskCard from "./TaskCard.js";

function TaskColumn(props) {
  const [status, setStatus] = useState(props.status);
  return (
    <div class="task-column">
      <h2>{props.status}</h2>
      <TaskCard />
    </div>
  );
}

export default TaskColumn;
