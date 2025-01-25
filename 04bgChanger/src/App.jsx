import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive")

  return (
    
    <div className="w-full h-screen " 
    style={{backgroundColor: color}}
    >
    <div>
       <h1> hy</h1>
    </div>
         
     
    </div>
  )
}

export default App
