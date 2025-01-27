import Header from './component/header/header'
import Footer from './component/footer/footer'
import { Outlet } from 'react-router'

function Layout() {
  return (
    <>
    <Header />
    <Outlet /> 
    {/* // Outlet is a placeholder for the child route's content. */}
    <Footer />  

    </>
  )
}

export default Layout