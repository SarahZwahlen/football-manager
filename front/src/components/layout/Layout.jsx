import Header from "./Header"
import Footer from "./Footer"
import NavBar from "./NavBar"
import { Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <>
            <Header />
            <NavBar />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout