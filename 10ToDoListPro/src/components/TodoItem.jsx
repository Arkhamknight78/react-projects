import { useState } from "react";
import { useTodoContext } from "../context/TodoContext";

function TodoItem({ todo }) {
//   console.log(todo);


  const { RemoveTodo, UpdateTodo, ToggleComplete } = useTodoContext();
  const editTodo = () => {
    UpdateTodo(todo.id, {
      ...todo,
      content: todoMsg,
      //update the todo with the new content
      //spread the previous todo object and update the content property with the new content
    });
    setIsTodoEditable(false)
    //Defined in App.js
  };
  //
  //toggle the todo completion status
  const ToggleCompleted = () => {
    ToggleComplete(todo.id);
    //Defined in App.js
    //toggle the completion status of the todo. Defined in App.js. but can be called to anywhere through this contextMethod
    //sends the todo id to the toggleComplete function in App.js
  };

  const [isTodoEditable, setIsTodoEditable] = useState(false);
//   console.log(isTodoEditable);

  // console.log(todo.content);

  const [todoMsg, setTodoMsg] = useState(todo.content);

  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.completed}
        onChange={ToggleCompleted} // calls function to toggle the completion status of the todo
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          isTodoEditable ? "border-black/10 px-2" : "border-transparent"
        } ${todo.completed ? "line-through" : ""}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      {/* Edit, Save Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (todo.completed) return;

        //   console.log("Before toggle:", isTodoEditable);
          if (isTodoEditable) {
            editTodo();
          } else {
            setIsTodoEditable((prev) => !prev);
          }
        //   console.log("After toggle:", isTodoEditable);
        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button>
      {/* Delete Todo Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => RemoveTodo(todo.id)}
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;
