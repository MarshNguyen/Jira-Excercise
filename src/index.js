import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Title(props){
    return (
        <h1>
            {props.value}
        </h1>
    );
}

function Task(props){
    return(
      <p>
          {props.value}
      </p>  
    );
}

function Assignee(props){
    return(
        <p>
            {props.value}
        </p>
    );
}

function StickyContent(props){
    return(
        <p>
            {props.value}
        </p>
    )
}

class TaskCard extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            title:"Order Lunch",
            task:"Order fries",
            assignee:"John Doe",
            sticky_content: "lorem ipsum"
        }
    }
    
    renderTitle(title){
        return(
            <Title
                value = {title}
            />
        );
    }

    renderTask(task){
        return(
            <Task
                value = {task}
            />
        );
    }

    renderAssignee(assignee){
        return(
            <Assignee
                value = {assignee}
                />
        );
    }
    
    renderStickyContent(content){
        return(
            <StickyContent
                value = {content}
            />
        );
    }

    render(){
        const title = this.state.title;
        const task = this.state.task;
        const assignee = this.state.assignee;
        const sticky_content = this.state.sticky_content
    
        return(
            <div class = "taskcard">
                <div class = "title">
                    {this.renderTitle(title)}
                </div>
                <div class = "sticky-content">
                    {this.renderStickyContent(sticky_content)}
                </div>
                <div class = "task-footer">
                    <div class = "task">
                        {this.renderTask(task)}
                    </div>
                    <div class = "assignee">
                        {this.renderAssignee(assignee)}
                    </div>
                </div>
            </div>
        );
    }
}
  // ========================================
  
  ReactDOM.render(
    <TaskCard />,
    document.getElementById('root')
  );
  