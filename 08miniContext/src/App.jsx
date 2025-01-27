import Login from "./components/Login.jsx"
import Profile from "./components/Profile.jsx"
import UserContextProvider from "./context/UserContextProvider.jsx"
import './App.css'

function App() {
  

  return (
    <UserContextProvider>
      <h1>Context Api </h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
