import {useContext } from 'react'
import UserContext from '../context/UserContext'


function Profile() {
    const {user}= useContext(UserContext);


    if(!user) return <div>pls login</div>
    return (
    <div>Welcome {user}</div>
  )
}

export default Profile