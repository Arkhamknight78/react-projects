import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteTodo, updateTodo } from '../features/todo/todoSlice'

function TodoItem({ todo }) {
  const dispatch = useDispatch()
  const [isEditable, setIsEditable] = useState(false)
  const [todoMsg, setTodoMsg] = useState(todo.text)
  //made individual useStates for each todo item to handle the edit functionality
  //this is because we need to handle the edit functionality for each todo item individually
  //if we use a single useState for all todo items, then all todo items will be editable at the same time
  //hence each todoItem will have its own isEditable and todoMsg state
  

  return (
    <li className="mt-4 flex justify-between items-center bg-zinc-400 px-4 py-2 rounded">
      <input
        type="text"
        className={`border w-full bg-transparent rounded-lg ${
          isEditable ? "border-white border-2 px-2" : "border-transparent"
        } ${todo.completed ? "line-through" : ""}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isEditable}
      />
      <button
        onClick={() => dispatch(deleteTodo(todo.id))}
        className="text-white bg-red-500 border-0 py-1 px-4 m-2 focus:outline-none hover:bg-red-600 rounded text-md"
      >
        Delete
      </button>
      <button
        onClick={() => {
          if (todo.completed) return
          if (isEditable) {
            dispatch(updateTodo({ id: todo.id, text: todoMsg }))
          }
          setIsEditable((prev) => !prev)
        }}
        className="text-white bg-green-500 border-0 py-1 px-4 focus:outline-none hover:bg-green-800 rounded text-md"
      >
        {isEditable ? "Save" : "Edit"}
      </button>
    </li>
  )
}

function Todos() {
  const todos = useSelector((state) => state.todos.todos)

  return (
    <>
      <div className="text-5xl text-blue-800 py-15">Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} /> 
          // made a new component TodoItem to handle the individual todo items
        
        ))}
      </ul>
    </>
  )
}

export default Todos
