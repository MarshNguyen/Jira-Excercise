import React, { useState } from "react";
import ReactDOM from "react-dom";

import TaskBoard from "./TaskBoard.js";

function JiraBoard() {
  const [title, setTitle] = useState("Ordering food for the crew");

  return (
    <div class="jira-board">
      <h1>{title}</h1>
      <TaskBoard />
    </div>
  );
}

export default JiraBoard;
