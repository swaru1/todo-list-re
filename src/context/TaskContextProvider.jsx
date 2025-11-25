import React, { useState } from 'react'
import { TaskContext } from './TaskContext'

const TaskContextProvider = ({children}) => {

    const [allTasks, setAllTasks] = useState([])
    console.log(allTasks);

    const [editId, setEditId] = useState(null)

  return (
    <TaskContext.Provider value={{allTasks, setAllTasks, editId, setEditId}}>
        {children}
    </TaskContext.Provider>
  )
}

export default TaskContextProvider
