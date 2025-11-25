import React, { useContext } from 'react'
import Task from './Task'
import { TaskContext } from '../context/TaskContext'

const TaskContainer = () => {

    const {allTasks} = useContext(TaskContext)

  return (
    <div className='p-2 bg-orange-200 flex flex-col gap-2'> This is taskContainer
      {allTasks.map((val, idx) => {
        return <Task key={idx} val={val} id={idx}/>
      })}
    </div>
  )
}

export default TaskContainer
