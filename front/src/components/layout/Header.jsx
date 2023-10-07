import { Link, useNavigate  } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'

import { logOut } from '../../utils/user.js'

import { LOG_OUT } from '../../store/reducers/user_reducer.js'

const Header = () => {
  const user = useSelector(state => state.users)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const is_logged = user.current_user.hasOwnProperty('email')
  const handleLogOut = () => {
    const result = logOut(user)
    dispatch(LOG_OUT(result))
    navigate('/')
  }
  return (
    <header>
      <div className='header-buttons'>
        <Link to="/"><i className="fa-solid fa-house"></i> HOME</Link>
      </div>
      <Link to="/"><h1><i className="fa-regular fa-futbol"></i> Football Manager</h1></Link>
      <div className='header-buttons end'>
        {!is_logged &&<Link to="/login">Login</Link>}
        {!is_logged &&<Link  to="/new-user">Créer un compte</Link>}
        {is_logged && <p onClick={handleLogOut}>Log out</p>}
      </div>
    </header>
  )
}

export default Header