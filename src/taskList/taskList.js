import React from "react";
import TaskDetails from "./taskDetail";

const TaskList = ({ tasks, changeStatus,remove }) => {
  return tasks.map((task, index) => {
    const {_id,...item}=task;
    return (
      <TaskDetails
        task={item}
        key={`task-id ${index}`}
        remove={()=>remove(_id)}
        changeStatus={(name)=>changeStatus(_id,name)}
      />
    );
  });
};

export default TaskList;
