import { useState } from "react";
import AddTodo from "./components/AddTodo/addTodo";
import './App.css';
import TodoList from "./components/List/todoList";
function App() {
  const [todo,setTodo]=useState('');
  const [todos,setTodos]=useState([]);
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
  return (
    <div className="App">
      <span>Add Your Todo ✍️</span>
    <AddTodo todo={todo} getTodo={getTodo} addTodos={addTodos}/>
    <TodoList todos={todos} handleTaskCompleted={handleTaskCompleted} 
    deleteTask={deleteTask}/>
    </div>
  );
}

export default App;
