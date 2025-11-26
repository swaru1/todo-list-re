import React, { useEffect, useState } from "react";
import { TaskContext } from "./TaskContext";

const TaskContextProvider = ({ children }) => {
  const [allTasks, setAllTasks] = useState([]);
  const [editId, setEditId] = useState(null);
  console.log("AllTasks:", allTasks);
  console.log("Edit Id:", editId);

  //Load saved tasks
  useEffect(() => {
    const saved = localStorage.getItem("tasks");
    if (saved) {
      setAllTasks(JSON.parse(saved));
    }
  }, []);

  //Save tasks whenever alltasks[] changes
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(allTasks));
  }, [allTasks]);

  return (
    <TaskContext.Provider value={{ allTasks, setAllTasks, editId, setEditId }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;
