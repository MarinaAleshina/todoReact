import React, { Component } from "react";
import Header from "../header/header";
import Main from "../main/main";
import TaskList from "../taskList/taskList";
import Task from "../tasks.json";

class App extends Component {
  state = {
    tasks: Task
  };

  add = (value, value1, id) => {
    if ((value, value1 === "")) return;
    this.setState({
      tasks: [
        ...this.state.tasks,
        { title: value, body: value1, complited: false, _id: id }
      ]
    });
  };

  changeStatus = (id,name) => {
    const { tasks = [] } = this.state;
    tasks.some((el) => {
      if (el._id === id) 
        el[name] = !el[name] 
    });

    this.setState({
      tasks
    });
  };

  remove=(id)=>{
const {tasks}=this.state
const index=tasks.findIndex(el=>el._id===id)
const newArr=[
  ...tasks.slice(0,index),
...tasks.slice(index+1,tasks.length)
]
this.setState({tasks:newArr})
  }

  render() {
    const { tasks } = this.state;
    const newCount = tasks.length;
    return (
      <div className={"wrap"}>
        <Header count={newCount} />
        <Main add={this.add} />
        <div className={"container-tasks"}>
          <div className={"task-btn-container"}>
            <button
              className={"tab-btn btn-all-tasks btn-active"}
              data-tab="all"
            >
              All tasks
            </button>
            <button
              className={"tab-btn btn-incomplite-tasks"}
              data-tab="completed"
            >
              Incomplited tasks
            </button>
          </div>
          <ul className={"task-container"}>
            <TaskList tasks={tasks} changeStatus={this.changeStatus} remove={this.remove}/>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
