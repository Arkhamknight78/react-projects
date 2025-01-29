    import { createSlice, nanoid } from "@reduxjs/toolkit";

    const initialState = {
        todos: JSON.parse(localStorage.getItem("todos")) || [
            {id: '1', text: 'dododotoot1', completed: false},
        ]
    }


    export const todoSlice= createSlice({
        name: 'todos', //used to identify the slice of the store
        initialState, //initial state of the store
        reducers:{
            addTodo: (state, action)=>{
                const todo={id: nanoid(), text: action.payload, completed: false}
                state.todos.push(todo)

                localStorage.setItem("todos", JSON.stringify(state.todos));

            }, //state is the current state of the store
            //action is the object that is dispatched to the store
            //action.payload is the data that is dispatched to the store
            //payload can be anything from a string to an object
            toggleTodo: (state, action)=>{
                const existingTodo= state.todos.find((todo)=> todo.id===action.id)
                if(existingTodo){
                    existingTodo.completed = !existingTodo.completed
                }

                localStorage.setItem("todos", JSON.stringify(state.todos));
            },
            deleteTodo: (state, action)=>{
                state.todos= state.todos.filter((todo)=> todo.id!== action.payload)

                localStorage.setItem("todos", JSON.stringify(state.todos));
            },
            updateTodo: (state, action)=>{
                const {id, text}=action.payload
                const existingTodo= state.todos.find((todo)=> todo.id==id)
                if(existingTodo){
                    existingTodo.text=text
                }
                localStorage.setItem("todos", JSON.stringify(state.todos));
            },
        }
    })

    export const {addTodo, toggleTodo, deleteTodo, updateTodo}= todoSlice.actions 
    //actions are the functions that are dispatched to the store
    export default todoSlice.reducer
    //reducers are the functions that update the state of the store

