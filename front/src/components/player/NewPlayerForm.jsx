import { useState } from "react";

import { useDispatch, useSelector } from "react-redux"
import { CREATE_PLAYER } from "../../store/reducers/football_data_reducer";

import { createPlayer } from "../../utils/player";

import { useNavigate } from "react-router-dom";

const NewPlayerForm = (props) => {
  const footballData = useSelector(state => state.footballData)
  
  const [player, setPlayer] = useState({name : "", age : 1, isStarterPlayer : true, playerPosition : "Attaquant"})
  const [teamId, setTeamID] = useState("")
  const [errorMessage, setErrorMessage] = useState(null)
  
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const handleCreate = (e) => {
    e.preventDefault()
    const result = createPlayer(footballData, player, teamId)
    if (result.has_error) {
      setErrorMessage(result.message)
    } else {
      dispatch(CREATE_PLAYER(result.data))
      navigate("/team-list")
    } 
  }

  return (
    <main>
      <h2>Créer un nouveau joueur</h2>
      <form className="form">
        <label>Nom du joueur</label>
        <input type="text" value={player.name} onChange={(e) => setPlayer({...player, name : e.target.value})} required/>
        <label>Age</label>
        <input type="number" value={player.age} min="1" required onChange={(e) =>setPlayer({...player, age : e.target.value > 40 ? null : parseFloat(e.target.value) })}/>
        {!player.age && <p className="error">Le joueur est trop agé, il ne peut avoir plus de 40 ans.</p>}
        <label>Équipe</label>
        <select onChange={(e) => setTeamID(e.target.value)}>
          <option>-- Sélectionner une équipe</option>
            {footballData.map((team, index) => {return <option key={index} value={team.id}>{team.name}</option>})}
        </select>
        <label>Poste</label>
        <select value={player.playerPosition} onChange={(e) => setPlayer({...player, playerPosition : e.target.value})}>
          <option value="Attaquant">Attaquant</option>
          <option value="Défenseur">Défenseur</option>
          <option value="Gardien">Gardien</option>
        </select>
          <label>Le joueur est titulaire</label>
          <select value={player.isStarterPlayer} onChange={(e) => setPlayer({...player, isStarterPlayer : e.target.value === "true" ? true : false})}>
          <option value="true" default>Oui</option>
          <option value="false">Non</option>
        </select>
        <button  className="main-button" onClick={handleCreate}>Créer le joueur</button>
        {errorMessage && <p className="error">{errorMessage}</p>}
      </form>
    </main>
  )
}

export default NewPlayerForm