import React, { useState } from 'react'
import { TaskContext } from './TaskContext'

const TaskContextProvider = ({children}) => {

    const [allTasks, setAllTasks] = useState([])
    console.log("AllTasks:", allTasks);

    const [editId, setEditId] = useState(null)
    console.log("Edit Id:", editId);
    

  return (
    <TaskContext.Provider value={{allTasks, setAllTasks, editId, setEditId}}>
        {children}
    </TaskContext.Provider>
  )
}

export default TaskContextProvider
