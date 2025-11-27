import React, { useContext } from 'react'
import Task from './Task'
import { TaskContext } from '../context/TaskContext'

const TaskContainer = () => {

    const {allTasks} = useContext(TaskContext)
    console.log("Task Container:", allTasks);
    
  return (
    <div className='p-2 bg-orange-200 flex flex-col gap-2'> This is taskContainer
      {allTasks.map((val, idx) => {
        return <Task key={idx} val={val}/>
      })}
    </div>
  )
}

export default TaskContainer
