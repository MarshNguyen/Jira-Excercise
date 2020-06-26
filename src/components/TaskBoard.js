import React, { useState } from "react";
import ReactDOM from "react-dom";
import TaskColumn from "./TaskColumn.js";

function TaskBoard() {
  return (
    <div class="task-board">
      <TaskColumn status="TO-DO" />
      <TaskColumn status="IN PROGRESS" />
      <TaskColumn status="READY TO TEST" />
      <TaskColumn status="DONE" />
    </div>
  );
}

export default TaskBoard;
