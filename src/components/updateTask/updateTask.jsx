import './updateTask.css'
import React from 'react'
import { useState } from 'react';

export const UpdateTask=({taskToUpdate,removeUpdateField,updateTask,})=> {
    const [task,setTask]=useState(taskToUpdate.todo);
    return (
            <div className='update-div'>
                <input type="text" 
                placeholder="update your Task.."
                value={task}
                onChange={e=>setTask(e.target.value)}
                ></input>
            <button
            className="updatebtn"
            onClick={()=>{
                updateTask(task)
                removeUpdateField()
            }
            }>
                Update
            </button>
            <button className="cancelbtn"
            onClick={()=>removeUpdateField()}>
                Cancel
            </button>
            </div>
    )
}

