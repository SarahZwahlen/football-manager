import { useContext, useState } from 'react'
import { UserContext } from '../../context/userContext'
import { Link, useNavigate } from 'react-router-dom'

export function Login () {
    const { logUser } = useContext(UserContext)
    const [user, setUser] = useState({})
    const [errorMessage, setErrorMessage] = useState(null)

    const navigate = useNavigate()

    const handleClick = (e) => {
        e.preventDefault()
        const loggedIsSuccessfull = logUser(user)
        loggedIsSuccessfull ? navigate("/") : setErrorMessage("La connexion n'a pas abouti")

    }

    return (
        <main>
            <h2>Connectez vous</h2>
            <form className='form'>
                <label>Adresse email</label>
                <input type='email' placeholder='john@doe.com' onChange={(e) => setUser({
                    ...user,
                    email: e.target.value
                })}/>
                <label>Mot de passe</label>
                <input type='password' onChange={(e) => setUser({
                    ...user,
                    password: e.target.value
                })}/>
                <button className="main-button" onClick={handleClick}>Login</button>
                {errorMessage && <p className='error'>{errorMessage}</p>}
                <Link to='/new-user' className='main-button main-link'>Créer un compte</Link>
            </form>
            </main>
    )
}