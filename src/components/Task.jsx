import React, { useContext } from 'react'
import { TaskContext } from '../context/TaskContextProvider';

const Task = ({elem}) => {

    const {allTasks, setAlltasks} = useContext(TaskContext);
    const {setEditId} = useContext(TaskContext)

    const handleDel = (e)=> {
        const afterDelArr = allTasks.filter((val)=> val.id !== elem.id)
        setAlltasks(afterDelArr);
    }

    const handleUpdate = () => {
        setEditId(elem.id);
    }

  return (
    <div className=' bg-gray-100 rounded-md flex items-center justify-between p-1 pl-2'>
      <h1>{elem.task}</h1>
      <div className='flex gap-1.5 *:rounded *:p-1 *:px-3 *:active:scale-95 *:select-none *:cursor-pointer'>
        <button onClick={handleDel} className='bg-rose-500 text-white text-xs font-semibold'>DELETE</button>
        <button onClick={handleUpdate} className='bg-teal-600 text-white text-xs font-semibold'>UPDATE</button>
      </div>
    </div>
  )
}

export default Task
