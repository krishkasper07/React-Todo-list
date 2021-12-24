import './updateTask.css'
import React from 'react'
import { useState } from 'react';

export const UpdateTask=({taskToUpdate,removePopUp,updateTask,})=> {
    const [task,setTask]=useState(taskToUpdate.todo);
    return (
        <div className='popup'>
            <div className='popup-content'>
                <input type="text" 
                placeholder="update your Task.."
                value={task}
                onChange={e=>setTask(e.target.value)}
                ></input>
            <button
            className="update"
            onClick={()=>{
                updateTask(task)
                removePopUp()
            }
            }>
                Update
            </button>
            <button className="cancel"
            onClick={()=>removePopUp()}>
                Cancel
            </button>
            </div>
        </div>
    )
}

