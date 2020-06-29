import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./TaskCard.css";

function Title(props) {
  return <h1>{props.value}</h1>;
}

function Type(props) {
  return <p>{props.value}</p>;
}

function Assignee(props) {
  return <p>{props.value}</p>;
}

function StickyContent(props) {
  return <p>{props.value}</p>;
}

function TaskCard(props) {
  const [title, setTitle] = useState(props.title);
  const [type, setType] = useState(props.type);
  const [assignee, setAssignee] = useState(props.assignee);
  const [stickyContent, setStickyContent] = useState(props.stickyContent);
  const [status, setStatus] = useState(props.state);

  return (
    <div class="taskcard">
      <div class="title">
        <Title value={title} />
      </div>
      <div class="sticky-content">
        <StickyContent value={stickyContent} />
      </div>
      <div class="task-footer">
        <div class="type">
          <Type value={title} />
        </div>
        <div class="assignee">
          <Assignee value={title} />
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
