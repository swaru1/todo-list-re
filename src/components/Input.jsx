import React, { useContext, useEffect, useState } from "react";
import { TaskContext } from "../context/TaskContext";

const Input = () => {
  const [inptxt, setInptxt] = useState("");
  const { allTasks, setAllTasks, editId, setEditId } = useContext(TaskContext);


  useEffect(()=> {
    if(editId !== null) {
        setInptxt(allTasks[editId])
    }
  }, [editId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inptxt.trim() === "") return;

    if (editId !== null) {
        const updatedTasks = [...allTasks];
        updatedTasks[editId] = inptxt;
        setAllTasks(updatedTasks);

        setEditId(null);
        setInptxt("");
        return;
    }

    //add task
    setAllTasks((prev) => [...prev, inptxt]);
    console.log("submitted");
    setInptxt("");
  };

  return (
    <div className="bg-fuchsia-300 p-4 items-center flex gap-6">
      This is input
      <form className="flex gap-4" onSubmit={handleSubmit}>
        <input
          value={inptxt}
          onChange={(e) => {
            setInptxt(e.target.value);
          }}
          type="text"
          placeholder="enter text here"
          className="border py-1 px-3 bg-green-200"
        />
        <button className="px-3 py-1 bg-blue-500 text-white font-semibold rounded-md active:scale-95">Submit</button>
      </form>
    </div>
  );
};

export default Input;
