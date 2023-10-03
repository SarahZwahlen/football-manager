import {UserContext} from '../../context/userContext.js'
import {useContext} from 'react'

const Header = () => {
    const {logout} = useContext(UserContext)

    return (
        <header>
            <h1><i class="fa-regular fa-futbol"></i> Football Manager</h1>
            <p onClick={() => logout()}><i class="fa-solid fa-door-closed"></i></p>
        </header>
    )
}

export default Header