import React from "react";
import TaskInput from "./components/TaskInput";
import TaskContainer from "./components/TaskContainer";

const App = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="h-100 w-140 bg-slate-300 p-2 rounded-lg">
        <TaskInput />
        <TaskContainer />
      </div>
    </div>
  );
};

export default App;
