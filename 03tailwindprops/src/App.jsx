import { useState } from 'react'
import Card from './components/Card.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let newObj = 
  {
    name: 'Vin', age: 22
  }
  

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>tailwindcss</h1>
      <Card btnText="Read More" someObj={newObj} />
    </>
  )
}

export default App
