import { Team } from './Team.jsx'

import { useSelector, useDispatch } from "react-redux"

import { useEffect } from "react"
import { EDIT_TEAM } from '../../store/reducers/football_data_reducer.js'

const TeamList = () => {
  const footballData = useSelector(state => state.footballData)
  const dispatch = useDispatch()

  useEffect(() => {
    const localTeamData = JSON.parse(localStorage.getItem("footballTeams"))
    if (localTeamData) dispatch(EDIT_TEAM(localTeamData))
  },[])
    
  return (
    <main>
      {footballData.length >0 && <h2>Liste des équipes</h2>}
      {footballData.map((team, index) => <Team teamData={team} key={index}/>) }   
    </main>
  )
}

export default TeamList