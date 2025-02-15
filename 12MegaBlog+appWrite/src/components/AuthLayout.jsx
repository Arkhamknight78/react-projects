import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router'    
import { useSelector } from 'react-redux'



export default function AuthLayout({children, authentication=true}) {
    const navigate= useNavigate()
    const authStatus = useSelector(state=>state.auth.status)

    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        if(authentication && authStatus!==authentication){
           navigate('/login')
        }
        else if(!authentication && authStatus!==authentication){
            navigate('/')
        }
        setLoading(false)
    }, [authStatus, navigate, authentication])

  return loading? <div>loading...</div> : <>{children}</>
}

// The AuthLayout component is a layout component that checks the authentication status of the user. It takes two props, children and authentication. The children prop is the component that will be rendered inside the AuthLayout component, and the authentication prop is a boolean value that determines whether the user needs to be authenticated to access the component.
