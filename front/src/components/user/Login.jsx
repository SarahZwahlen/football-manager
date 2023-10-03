import { useContext, useState } from 'react'
import { UserContext } from '../../context/userContext'

export function Login () {
    const { logUser } = useContext(UserContext)
    const [user, setUser] = useState({})
    return (
        <>
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
                <button className="main-button" onClick={() => logUser(user)}>Login</button>
            </form>
            </>
    )
}