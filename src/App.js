import { useState,useEffect} from "react";
import AddTodo from "./components/AddTodo/addTodo";
import './App.css';
import TodoList from "./components/List/todoList";
import {UpdateTask} from "./components/updateTask/updateTask";

const getLocalStorage=()=>{
  let todosList=localStorage.getItem('todosList');
  if(todosList){
    return(todosList =JSON.parse(localStorage.getItem('todosList')));
  }else{
    return [];
  }
}

function App() {
  const [todo,setTodo]=useState('');
  const [todos,setTodos]=useState(getLocalStorage());
  const [taskToUpdate,setTaskToUpdate]=useState({});
  const [showUpdateField,setUpdateField]=useState(false);

  useEffect(()=>{
        localStorage.setItem('todosList',JSON.stringify(todos))
  },[todos]);

  const getTodo=({target})=>{
       setTodo(target.value);
       console.log(todo);
  }
  const addTodos=()=>{
    if(todo.trim()=== ''){
      return
    }
    let newtodo={
      id:todos.length+1,
      todo:todo.trim(),
      isComplete:false
    }
    setTodos([...todos,newtodo]);
    setTodo('');
  }
  const handleTaskCompleted=taskId=>{
     const newTask=[...todos]
     newTask.forEach(item=>{
       if(item.id === taskId){
         item.isComplete=!item.isComplete
       }
     })
     setTodos(newTask);
     console.log(todos);
  }
  const deleteTask=taskId=>{
   const newTask=todos.filter(todo=>todo.id !==taskId)
   setTodos(newTask);
  }

  const taskToBeUpdated=task=>{
    const taskObj={...taskToUpdate}
    if(task.trim()=== ''){
      return
    }
    taskObj.todo=task;
    const newTodos=[...todos]
    newTodos.forEach(item=>{
      if(item.id === taskObj.id){
        item.todo=taskObj.todo;
      }
    })
    setTodos(newTodos)
  }
  const deleteCompletedTasks=()=>{
        const updatedTodos=todos.filter(todo=>todo.isComplete === false)
        setTodos(updatedTodos);
  } 
  return (
    <div className="App">
      <span>Add Your Todo's ✍️</span>
    <AddTodo todo={todo} getTodo={getTodo} addTodos={addTodos}/>
    {showUpdateField ? <UpdateTask
    taskToUpdate={taskToUpdate}
    updateTask={taskToBeUpdated}
    removeUpdateField={()=>setUpdateField(!showUpdateField)}
    /> :<TodoList todos={todos} 
    handleTaskCompleted={handleTaskCompleted} 
    deleteTask={deleteTask}
    taskToUpdate={task=>setTaskToUpdate(task)}
    showUpdateField={()=>setUpdateField(!showUpdateField)}
    />}
    {todos.length > 0 ?<button className="clear-task"
    onClick={deleteCompletedTasks}>
           🗑️Clear Completed 
    </button>: ''}
    </div>
  );
}

export default App;
