import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCounter] = useState(15)

  
  const addValue= ()=> {
    if(count+1 <=20 )setCounter(count + 1)
  }
 const subValue= ()=> {

    if(count-1 >=0 )setCounter(count - 1)
  }
  return (
    <>
     <h1>Count: {count}</h1>
     <button onClick={addValue} >add Value {count}</button>
     <button onClick={subValue}>sub Value {count}</button>
    </>
  )
}

export default App
