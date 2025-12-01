import React, { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContextProvider";
import { nanoid } from "nanoid";

const TaskInput = () => {

    const [inputTxt, setInputTxt] = useState('')
    const {allTasks, setAlltasks} = useContext(TaskContext)

    const handleChange = (e)=> {
        setInputTxt(e.target.value)
    }

    const handleSubmit = (e)=> {

        e.preventDefault();
        if(inputTxt == "") return;

        let taskObj = {
            id: nanoid(),
            task: inputTxt,
        }

        setAlltasks((prev)=> [...prev, taskObj])
        setInputTxt("")
    }
    
    

  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit} className="flex gap-4 items-center">
        <input
          type="text"
          placeholder="enter your text"
          className="border py-0.5 px-3 w-80 border-slate-500 rounded-xl outline-slate-500"
          value={inputTxt}
          onChange={handleChange}
        />
        <input
          type="submit"
          className="py-0.5 px-3 bg-sky-600 text-white font-semibold rounded active:scale-95 cursor-pointer select-none"
          value="add task"
        />
      </form>
    </div>
  );
};

export default TaskInput;
