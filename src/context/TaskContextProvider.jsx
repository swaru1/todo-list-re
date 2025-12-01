import React, { useState } from 'react'
import { createContext } from "react";

export const TaskContext = createContext();

const TaskContextProvider = ({children}) => {

  const [allTasks, setAlltasks] = useState([])
  console.log(allTasks);

  return (
    <TaskContext.Provider value={{allTasks, setAlltasks}}>
      {children}
    </TaskContext.Provider>
  )
}

export default TaskContextProvider
