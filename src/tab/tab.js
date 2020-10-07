import React from 'react';

const Tabs = ({filter,filterFunc})=>{
  return (
    <>
    <div className={"task-btn-container"}>
      <button
        className={`tab-btn btn-all-tasks ${!filter || filter==="all"? "btn-active" :""}` }
         onClick={()=>filterFunc('all')}
      >
        All tasks
      </button>
      <button
      
        className={`tab-btn btn-incomplite-tasks ${filter==="complited"? "btn-active" :""}`}
         onClick={()=>filterFunc('complited')}
      >
        Incomplited tasks
      </button>
    </div>
    </>
  )
}

export default Tabs