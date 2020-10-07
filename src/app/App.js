import React, { Component } from "react";
import Header from "../header/header";
import Main from "../main/main";
import TaskList from "../taskList/taskList";
import Task from "../tasks.json";
import Tabs from "../tab/tab";

class App extends Component {
  state = {
    tasks: Task,
    filter:false
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
    // eslint-disable-next-line array-callback-return
    tasks.some((el )=> {
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

  filterFunc=(type)=>{
  let filter=false;
  if(filter!=="all") filter=type;
  this.setState({filter})
  }

  useTabs=(tasks,filter)=>{
    if(!filter || filter==="all") return tasks;
    const newlist=tasks.filter(el=>
    {return el[filter]})

    return newlist
  }

  render() {
    const { tasks,filter } = this.state;
    const newCount = tasks.length;
    const tab=this.useTabs(tasks,filter)
   
    return (
      <div className={"wrap"}>
        <Header count={newCount} />
        <Main add={this.add} />
        <div className={"container-tasks"}>
          <Tabs filterFunc={this.filterFunc} filter={filter}/>
          <ul className={"task-container"}>
            <TaskList tasks={tab} changeStatus={this.changeStatus} remove={this.remove}/>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
