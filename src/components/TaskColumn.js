import React, { useState } from "react";
import ReactDOM from "react-dom";

function TaskColumn(props) {
  const [status, setStatus] = useState(status);
  return (
    <div class="task-column">
      <h2>{props.status}</h2>
      <TaskCard />
    </div>
  );
}
