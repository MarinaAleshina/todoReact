import React, { Component } from "react";

class TaskDetails extends Component {
  render() {
    const { task, changeStatus,remove } = this.props;
    return (
      <li className={"task-item"}>
        <h2>{task.title}</h2>
        <p>{task.body}</p>
        <button
          className={`btn ${task.complited ? "btn-active" : ""}`}
          onClick={(() => changeStatus('complited'))}
        >
          Done
        </button>
        <button
          className={`btn`}
          onClick={(() => remove())}
        >
          Delete
        </button>
      </li>
    );
  }
}

export default TaskDetails;
