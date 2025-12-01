import React, { useState } from 'react'
import { createContext } from "react";

export const TaskContext = createContext();

const TaskContextProvider = ({children}) => {

  const [allTasks, setAlltasks] = useState([])
  const [editId, setEditId] = useState(null);
  console.log(allTasks);

  return (
    <TaskContext.Provider value={{allTasks, setAlltasks, editId, setEditId}}>
      {children}
    </TaskContext.Provider>
  )
}

export default TaskContextProvider
