import "./addTodo.css"
const AddTodo = ({todo,getTodo,addTodos}) => {
    return ( <div className="addtodo">
        <input type="text" name="addtodos" value={todo}
         onChange={getTodo}/>
        <button title="Add todo" onClick={addTodos}>ADD TODO</button>
    </div> );
}
 
export default AddTodo;