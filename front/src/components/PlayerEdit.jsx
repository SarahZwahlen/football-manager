import { Context } from "../context/football_app_context"
import { useContext, useState } from "react"

export function PlayerEdit ({children, teamIndex , playerIndex}) {
    const {footballData, setFootballData } = useContext(Context)
    const [edit, setEdit] = useState(footballData[teamIndex].players[playerIndex])
    const [errorMessage, setErrorMessage] = useState(null)

    const handleEdit = (e) => {

        
        e.preventDefault()

    const nonStarterPlayerCount = footballData[teamIndex].players.reduce((acc, value) => value.isStarterPlayer === false ? acc = acc +1 : acc, 0)       
     if(!edit?.age){
        setErrorMessage('Le joueur est trop vieux')
    } else if(nonStarterPlayerCount >=2){
        setErrorMessage("Il y a déjà deux remplaçants")
    } else {
        const teamPlayers = footballData[teamIndex].players
        teamPlayers.splice(playerIndex, 1, edit)
        const updatedTeam = {
            ...footballData[teamIndex],
            players: teamPlayers
        }
        const updatedData = footballData.splice(teamIndex, 1, updatedTeam)
        setFootballData(updatedData)
    }
    }
    return (
        <div>
            {children}
             <form className="small-form">
                <legend>Modifier le joueur</legend>
                <div>
                <label>Nom</label>
                <input value={edit?.name} onChange={(e) => setEdit({
                    ...edit,
                    name: e.target.value
                })} />
                <label>Poste</label>
                <select onChange={(e) => setEdit({
                    ...edit,
                    playerPosition: e.target.value
                })}>
                   <option value="Attaquant">Attaquant</option>
                    <option value="Défenseur">Défenseur</option>
                    <option value="Gardien">Gardien</option>
                </select>
                <label>Age</label>
                <input type="number" value={edit?.age} required onChange={(e) => setEdit({
                    ...edit,
                    age: e.target.value>40 ? null : parseFloat(e.target.value)
                })}/>
                <label>Titulaire</label>
                <select onChange={(e) => setEdit({
                    ...edit,
                    isStarterPlayer : e.target.value ==='true' ? true : false
                })}>
                    <option value='true' default>Oui</option>
                    <option value='false'>Non</option>

                </select>
                <button className="main-button" onClick={handleEdit}>Sauvegarder</button>
                    </div>
                {errorMessage && <p className="error">{errorMessage}</p>}
             </form>
        </div>
    )
}