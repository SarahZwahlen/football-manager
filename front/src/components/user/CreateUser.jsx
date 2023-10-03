import { UserContext } from "../../context/userContext"
import { useContext, useState } from "react"


const CreateUser = () => {
    const {createUser} = useContext(UserContext)
    const [userData, setUserData] = useState({email : null, username : null, password : null})
    const [errorMessage, setErrorMessage] = useState(null)
    const handleButton = (e) => {
        e.preventDefault()

        if(!userData.password){
            setErrorMessage("Un mot de passe est obligatoire")
            return
        }

        if(!userData.email){
            setErrorMessage("Un email est obligatoire")
            return
        }

        if(!userData.username){
            setErrorMessage("Un nom d'utilisateur est obligatoire")
            return
        }

        const result = createUser(userData)

        if(!result.isCreated){
            setErrorMessage(result.error)
        }   
    }

    return(
        <>
            <h2>Créer un utilisateur</h2>
            <form className="form">
                <label>Nom d'utilisateur</label>
                <input type="text" required placeholder="JohnDoe" OnChange={(e) => setUserData({...userData, username : e.target.value})}/>
                <label>Email</label>
                <input type="email" required placeholder="john@doe.com"  OnChange={(e) => setUserData({...userData, email : e.target.value})}/>
                <label>Mot de passe</label>
                <input type="password" required onCanPlay={(e) => setUserData({...userData, password : e.target.value})} />
                <button className="main-button" onClick={handleButton} >Créer l'utilisateur</button>
                {errorMessage && <p className="error">{errorMessage}</p>}
            </form>
        </>
    )
}

export default CreateUser