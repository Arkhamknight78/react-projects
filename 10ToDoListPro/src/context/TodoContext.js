import {createContext, useContext} from 'react';

export const TodoContext = createContext({
    todo:[
        {
            id:1,
            content :"Learn React",
            completed :false
        }
    ],
    AddTodo: (todo)=>{},
    UpdateTodo: (id, todo)=>{},
    RemoveTodo: (id)=>{},
    ToggleComplete: (id)=>{}  //toggle the completion status of the todo. Defined in App.js. but can be called to anywhere through this contextMethod
});

export const useTodoContext=()=>useContext(TodoContext)

export const ToDoProvider = TodoContext.Provider

