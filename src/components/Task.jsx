import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const Task = ({val, id}) => {

    const {allTasks, setAllTasks, setEditId} = useContext(TaskContext)

    const handleDelete = ()=> {
        const filterArr = allTasks.filter((val, idx)=> idx != id )
        setAllTasks(filterArr);
        console.log("deleted:", "value:", val, "id:", id);
    }

    const handleUpdate = ()=> {
        setEditId(id)
    }
    
  return (
    <div className="flex p-2 bg-lime-300 w-[800px] justify-between border items-center">
      <h1>{val}</h1>
      <div className="flex gap-4">
        <button onClick={handleDelete} className="p-1 px-3 bg-red-300 active:scale-95 rounded-md">delete</button>
        <button onClick={handleUpdate} className="p-1 px-3 bg-green-300 active:scale-95 rounded-md">update</button>
      </div>
    </div>
  );
};

export default Task;
