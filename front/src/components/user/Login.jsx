import { useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import userRepo from '../../repositories/user.repo'
import { LOG_IN } from '../../store/reducers/user_reducer'

export function Login () {
  const users = useSelector(state => state.users) 
  const dispatch = useDispatch()
  
  const [user, setUser] = useState({})
  const [errorMessage, setErrorMessage] = useState(null)
  
  const navigate = useNavigate()

  const handleLogIn = (e) => {
    e.preventDefault()
    const result = userRepo.logUser(users, user)
    if (result.has_error) {
      setErrorMessage(result.message)
    } else {
      dispatch(LOG_IN(result.data))
      navigate("/")
    }
  }

  return (
    <main>
      <h2>Connectez vous</h2>
      <form className='form'>
        <label>Adresse email</label>
        <input type='email' placeholder='john@doe.com' onChange={(e) => setUser({...user,email: e.target.value})}/>
        <label>Mot de passe</label>
        <input type='password' onChange={(e) => setUser({...user, password: e.target.value})}/>
        <button className="main-button" onClick={handleLogIn}>Login</button>
        {errorMessage && <p className='error'>{errorMessage}</p>}
        <Link to='/new-user' className='main-button main-link'>Créer un compte</Link>
      </form>
    </main>
  )
}