import { useState } from "react"

import { useNavigate } from "react-router-dom"

import { useSelector, useDispatch } from "react-redux"
import { ADD_TEAM } from "../../store/reducers/football_data_reducer"
import footballRepo from "../../store/helper/footbal_helper"

const NewTeamForm = () => {
  const footballData = useSelector((state) => state.footballData)
  const dispatch = useDispatch()

  const [newTeam, setNewTeam] = useState({
    name: '',
    jerseyColor: '#000000',
    players: [],
    id : null
  })
  const [errors, setErrors] = useState(null)

  const navigate = useNavigate()
  
  const handleNewTeam = (e) => {
    e.preventDefault()
    const result = footballRepo.createTeam(footballData, newTeam)
    if (result.isError) {
      setErrors(result.message)
    }
    else {
      dispatch(ADD_TEAM(result.data))
      navigate("/team-list")
    }
  }

  return (
    <main>  
      <h2>Créer une nouvelle équipe</h2>
      <form className="form">
        <label>Nom de l'équipe</label>
        <input type="text" value={newTeam.name} onChange={(e) => setNewTeam({...newTeam, name: e.target.value})} />
        <label>Couleur du maillot</label>
        <input value={newTeam.jerseyColor} type="color" onChange={(e) => setNewTeam({...newTeam, jerseyColor: e.target.value})}/>
        <button className="main-button" onClick={handleNewTeam}>Créer l'équipe</button>
      </form>
      {errors && <div>{errors}</div>}
    </main>
  )
}

export default NewTeamForm