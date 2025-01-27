import { useState } from "react";
import { useTodoContext } from "../context/TodoContext.js";

function TodoForm() {
     
    // const { addTodo } = useContext(TodoContext); //get the addTodo function from the context
    // console.log(localtodo);
    
    const [localtodo, setTodo] = useState("");  //state to store the todo input value
    const {AddTodo} = useTodoContext();

    const add= (e)=>{
        e.preventDefault(); //prevent the default form submission

        if(!localtodo) return 
        

        AddTodo({
            content: localtodo,
            completed: false
        })
        setTodo(""); //clear the input field after adding the todo  
    }

    return (
        <form  className="flex" onSubmit={add}>
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={localtodo}
                onChange={(e) => {
                    // console.log(e.target.value);
                    setTodo(e.target.value)
                    }}

            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0" >
                Add
            </button>
        </form>
    );
}

export default TodoForm;

