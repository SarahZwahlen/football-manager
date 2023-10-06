import { useState } from "react"

import footballRepo from "../../repositories/football.repo"
import { useDispatch, useSelector } from "react-redux"
import { EDIT_TEAM } from "../../store/reducers/football_data_reducer"

export function TeamEdit({ data, hideForm }) {
  const footballData = useSelector(state => state.footballData)
  const dispatch = useDispatch()

  const [teamData, setTeamData] = useState(footballData.find(team => team.id === data.id))
  const [errors, setErrors] = useState(null)
  
  const handleEdit = (e) => {
    e.preventDefault()
    const result = footballRepo.editTeam(footballData, teamData )
    if (result.isError) {
      setErrors(result.message)
    } else {
      dispatch(EDIT_TEAM(result.data))
      hideForm()
    }
  }

  return (
    <div>
      <form className="small-form">
        <legend>Modifier l'équipe</legend>
        <div>
          <label>Nom de l'équipe</label>
          <input value={teamData?.name} onChange={(e) => setTeamData({...teamData, name: e.target.value})} />
          <label>Couleur du maillot</label>
          <input type="color" value={teamData?.jerseyColor} onChange={(e) => setTeamData({...teamData, jerseyColor: e.target.value})}/>
          <button className="main-button" onClick={handleEdit}>Sauvegarder</button>
        </div>
      </form>
    </div>
  )
}