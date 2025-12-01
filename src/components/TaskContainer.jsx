import React, { useContext } from 'react'
import Task from './Task'
import { TaskContext } from '../context/TaskContextProvider'

const TaskContainer = () => {

    const {allTasks} = useContext(TaskContext)

  return (
    <div className='bg-slate-400 mt-3 p-2 flex flex-col gap-2 rounded-md'>
        {allTasks.length==0? <h1>No Tasks</h1> : allTasks.map((elem)=>{
            return <Task key={elem.id} elem={elem}/>
        })}
    </div>
  )
}

export default TaskContainer
