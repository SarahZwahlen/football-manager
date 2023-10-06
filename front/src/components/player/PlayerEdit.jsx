import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import footballRepo from "../../repositories/football.repo"
import { EDIT_PLAYER } from "../../store/reducers/football_data_reducer"

export function PlayerEdit ({teamIndex , playerIndex}) {
    const footballData = useSelector(state => state.footballData)
    const [newPlayerData, setNewPlayerData] = useState(footballData[teamIndex].players[playerIndex])
    const [errorMessage, setErrorMessage] = useState(null)

    const dispatch = useDispatch()
    const handleEdit = (e) => {
        e.preventDefault()
        const result = footballRepo.editPlayer(footballData, newPlayerData, teamIndex)
        if (result.isError) {
            setErrorMessage(result.message)
        } else {
            dispatch(EDIT_PLAYER(result.data))
        }
    }
    return (
        <div>
             <form className="small-form">
                <legend>Modifier le joueur</legend>
                <div>
                <label>Nom</label>
                <input value={newPlayerData?.name} onChange={(e) => setNewPlayerData({
                    ...newPlayerData,
                    name: e.target.value
                })} />
                <label>Poste</label>
                <select onChange={(e) => setNewPlayerData({
                    ...newPlayerData,
                    playerPosition: e.target.value
                })}>
                   <option value="Attaquant">Attaquant</option>
                    <option value="Défenseur">Défenseur</option>
                    <option value="Gardien">Gardien</option>
                </select>
                <label>Age</label>
                <input type="number" value={newPlayerData?.age} min="1" required onChange={(e) => setNewPlayerData({
                    ...newPlayerData,
                    age: e.target.value>40 ? null : parseFloat(e.target.value)
                })}/>
                <label>Titulaire</label>
                <select onChange={(e) => setNewPlayerData({
                    ...newPlayerData,
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