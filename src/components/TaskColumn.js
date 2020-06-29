import React, { useState } from "react";
import ReactDOM from "react-dom";
import TaskCard from "./TaskCard.js";

import "./TaskColumn.css";

function TaskColumn(props) {
  const [status, setStatus] = useState(props.status);
  return (
    <div class="task-column">
      <h2>{props.status}</h2>
      <TaskCard
        assignee="John Doe"
        status={status}
        stickyContent="Lorem Ipsum"
        title="Order Lunch"
        type="Task"
      />
    </div>
  );
}

export default TaskColumn;
