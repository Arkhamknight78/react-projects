import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Provider} from 'react-redux'
import store from './appStore/store'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import {AuthLayout, Login} from './components/index'
import SignUp from './Pages/SignUp.jsx'
import AllPosts from './Pages/AllPosts.jsx'
import EditPost from './Pages/EditPost.jsx'
import Addpost from './Pages/Addpost.jsx'
import Post from './Pages/Post.jsx'

const router= createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:[
      {
        path: '',
        element: <Home/>
      },
      {
        path:'/login',
        element: (
          <AuthLayout authentication={false}>
            <Login/>
          </AuthLayout>
        )
      },
      {
        path:'/signup',
        element: (
          <AuthLayout authentication={false}>
            <SignUp />
          </AuthLayout>
        )
      },
      {
        path:'/all-posts',
        element: (
          <AuthLayout authentication>
            <AllPosts/>
          </AuthLayout>
        )
      },
      {
        path:'/edit-post/:id',
        element: (
          <AuthLayout authentication={false}>
            <EditPost/>
          </AuthLayout>
        )
      },
      {
        path:'/add-post',
        element: (
          <AuthLayout authentication>
            <Addpost/>
          </AuthLayout>
        )
      },
      {
        path:'/post/:id',
        element: (
          <AuthLayout authentication>
            <Post/>
          </AuthLayout>
        )
      },
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}/>

  </Provider>,
)
