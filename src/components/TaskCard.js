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

class TaskCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Order Lunch",
      type: "Task",
      assignee: "John Doe",
      sticky_content: "lorem ipsum",
      status: "Done",
    };
  }

  renderTitle(title) {
    return <Title value={title} />;
  }

  renderType(type) {
    return <Type value={type} />;
  }

  renderAssignee(assignee) {
    return <Assignee value={assignee} />;
  }

  renderStickyContent(content) {
    return <StickyContent value={content} />;
  }

  render() {
    const title = this.state.title;
    const type = this.state.type;
    const assignee = this.state.assignee;
    const sticky_content = this.state.sticky_content;

    return (
      <div class="taskcard">
        <div class="title">{this.renderTitle(title)}</div>
        <div class="sticky-content">
          {this.renderStickyContent(sticky_content)}
        </div>
        <div class="task-footer">
          <div class="type">{this.renderType(type)}</div>
          <div class="assignee">{this.renderAssignee(assignee)}</div>
        </div>
      </div>
    );
  }
}
