import { Link, useNavigate  } from 'react-router-dom'

import { useContext } from 'react'

import { UserContext } from '../../context/userContext.js'

const Header = () => {
  const {logout, currentUser} = useContext(UserContext)
  const navigate = useNavigate()
  const handleLogOut = () => {
    logout()
    navigate('/')
  }
  return (
    <header>
      <div className='header-buttons'>
        <Link to="/"><i className="fa-solid fa-house"></i> HOME</Link>
      </div>
      <Link to="/"><h1><i className="fa-regular fa-futbol"></i> Football Manager</h1></Link>
      <div className='header-buttons end'>
        {!currentUser.isLogged &&<Link to="/login">Login</Link>}
        {!currentUser.isLogged &&<Link  to="/new-user">Créer un compte</Link>}
        {currentUser.isLogged && <p onClick={handleLogOut}>Log out</p>}
      </div>
    </header>
  )
}

export default Header