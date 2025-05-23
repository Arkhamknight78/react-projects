
import { useState } from "react";
import PropTypes from 'prop-types';
import UserContext from "./UserContext";

const UserContextProvider = ({children})=>{
    const [user, setUser]= useState(null)
    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}



export default UserContextProvider