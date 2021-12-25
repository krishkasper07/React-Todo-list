import './todoList.css';
const TodoList = ({todos,handleTaskCompleted,deleteTask,showUpdateField,taskToUpdate}) => {
    const tasks=todos.map((todo)=>{
        return <li key={todo.id}>
            <div style={{display:'flex'}}>
                {todo.isComplete ? "✔️":""}
                <p className={todo.isComplete ? "taskComplete":"taskIncomplete"}>
                {todo.todo}
                </p>
            </div>
            <div>
                <button className='completebtn'
                onClick={()=>handleTaskCompleted(todo.id)}>
                     ✔️Complete
                </button>
                <button className='editbtn'onClick={()=>{
                    taskToUpdate(todo)
                    showUpdateField()
                }}>
                   ✍🏻 Edit
                </button>
                <button
                className='deletebtn' 
                onClick={()=>deleteTask(todo.id)}>
                    ❌ Delete
                </button>
            </div>
        </li>
    })
    return (<div className="tasks">
        <ul>
           {tasks}
        </ul>
    </div>);
}
 
export default TodoList;