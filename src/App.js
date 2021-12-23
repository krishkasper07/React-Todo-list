import { useState } from "react";
import AddTodo from "./components/AddTodo/addTodo";
import './App.css';
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
      todo:todo.trim()
    }
    setTodos([...todos,newtodo]);
    setTodo('');
  }
  return (
    <div className="App">
      <span>Add Your Todo ✍️</span>
    <AddTodo todo={todo} getTodo={getTodo} addTodos={addTodos}/>
    </div>
  );
}

export default App;
