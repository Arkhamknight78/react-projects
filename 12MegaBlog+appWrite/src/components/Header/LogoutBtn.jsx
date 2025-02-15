
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth'
import {logout} from '../../appStore/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = async () => {
        await authService.logout()
        .then(() => {
            dispatch(logout())
        })
    }
  return (
    <button
    className='inline-block px-6 py-2 duration-200 hover:underline'
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn