import { useState } from "react";
import { ToDoProvider } from "./context/TodoContext";
import { useEffect } from "react";
import TodoForm from "./components/TodoForm.jsx";
import TodoItem from "./components/TodoItem.jsx";

/*
import axios from 'axios';
const fetchTodos = async () => {
      try {
        const response = await axios.get('https://your-cloud-storage-endpoint/todos');
        if (response.data && response.data.length > 0) {
          setTodos(response.data);
        }
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };

    const saveTodos = async (todos) => {
      try {
        await axios.post('https://your-cloud-storage-endpoint/todos', todos);
      } catch (error) {
        console.error('Error saving todos:', error);
      }
    };

    useEffect(() => {
      fetchTodos();
    }, []);

    useEffect(() => {
      saveTodos(todos);
    }, [todos]);
*/

function App() {
  const [todos, setTodos] = useState([]);

  const AddTodo = (todo) => {
    setTodos((prev) => [...prev, { id: (Date.now()), ...todo }]); 
    //spread the previous todos and add the new todo object to the array
    //the id is set to the current date
    //this will add the new todo to the todos array
  };

  const UpdateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  const RemoveTodo = (id) => {
    // console.log(id);
    
    setTodos((prev) =>
      prev.filter((todo) => todo.id !== id));

    //problem with the removeTodo function
    //setTodos is not updating the state because error in syntax of filter
    //setTodos((prev) => prev.filter((todo) => {todo.id !== id}));
    //the curly braces are not needed in the filter function as it is a single line of code and the return is implicit
    //so the correct syntax is:
    //setTodos((prev) => prev.filter((todo) => todo.id !== id));
    //this will filter out the todo with the id that matches the id passed to the function
  };

  const ToggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    )};
    //prevTodo= {id:1, title:"Learn React", completed:false} then {...prevTodo, completed:!prevTodo.completed} = {id:1, title:"Learn React", completed:true}
    //using spread operator to copy the prevTodo object and then change the completed property to the opposite of the current value
    //if completed is true, then it will be set to false and vice versa

    useEffect(() => {
      const todos = JSON.parse(localStorage.getItem("todos"))
  
      if (todos && todos.length > 0) {
        setTodos(todos)
      }
    }, [])
  
    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    //useEffect to get the todos from the localStorage when the component mounts
    
    //useEffect to save the todos to the localStorage whenever the todos state changes
    //use JSON.parse to get the todos from the localStorage
    //use JSON.stringify to save the todos to the localStorage
    
    
  
  return (
    <ToDoProvider
      value={{ todos, AddTodo, UpdateTodo, RemoveTodo, ToggleComplete }}
    >
      {/* getting ToDoProvider to give the context*/}
      {/* <h1 className='text-6xl'>App</h1> */}
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {/* <TodoItem/> */}

            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </ToDoProvider>
  );
}

export default App;
