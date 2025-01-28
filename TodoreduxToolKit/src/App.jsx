import { useState } from 'react'
import AddTodo from './components/addTodo'
import Todos from './components/Todos'
// import './app.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container mx-auto text-center'>
      <h1 className='text-4xl text-blue-800'> Redux ToDo</h1>
      <AddTodo/>
      <Todos />
    </div>
  )
}

export default App
