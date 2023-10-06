import { useState } from "react"

import { useNavigate } from "react-router-dom"

import { useSelector, useDispatch } from "react-redux"
import { ADD_USER, LOG_IN } from "../../store/reducers/user_reducer"
import userRepo from "../../repositories/user.repo"

const CreateUser = () => {
  const users = useSelector(state => state.users)
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const [userData, setUserData] = useState({email : null, name : null, password : null})
  const [errorMessage, setErrorMessage] = useState(null)
  
  const handleNewUser = (e) => {
    e.preventDefault()
    const result = userRepo.createUser(users, userData)
    if (result.has_error) {
      setErrorMessage(result.message)
    } else {
      dispatch(ADD_USER(result.data))
      const log_in = userRepo.logUser(result.data, userData)
      dispatch(LOG_IN(log_in))
      navigate("/")
    }
  }

  return(
    <main>
      <h2>Créer un utilisateur</h2>
      <form className="form">
        <label>Nom d'utilisateur</label>
        <input type="text" required placeholder="JohnDoe" onChange={(e) => setUserData({...userData, name : e.target.value})}/>
        <label>Email</label>
        <input type="email" required placeholder="john@doe.com"  onChange={(e) => setUserData({...userData, email : e.target.value})}/>
        <label>Mot de passe</label>
        <input type="password" required onChange={(e) => setUserData({...userData, password : e.target.value})} />
        <button className="main-button" onClick={handleNewUser} >Créer l'utilisateur</button>
        {errorMessage && <p className="error">{errorMessage}</p>}
      </form>
    </main>
  )
}

export default CreateUser