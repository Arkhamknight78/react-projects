import {useState, useContext } from 'react'
import UserContext from '../context/UserContext.js'



function Login() {
    const [username, setUsername]= useState("")
    const [pass, setPass]= useState("")

    const {setUser}= useContext(UserContext) // this is the context we created in the userContext.js file
    // setUser is from UserContextProvider.jsx file
    // setUser is the function that will set the user in the context

    const handleSubmit=(e)=>{
        e.preventDefault()
        setUser(username)
    }

  return (
    <div>
        <h2>
            Login
        </h2>
        <input type="text" value={username} placeholder="username"  onChange={(e) => setUsername(e.target.value) } />

        
        
        <input type="text" value={pass}  placeholder="password" onChange={(e)=>{
            setPass (e.target.value)
        }} />
        <button onClick={handleSubmit}>
            Submit
        </button>
    </div>
  )
}

export default Login