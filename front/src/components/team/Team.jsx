import { Link } from "react-router-dom"

import { useState } from "react"

import { useSelector, useDispatch } from "react-redux"
import { DELETE_TEAM } from "../../store/reducers/football_data_reducer"
import footballRepo from "../../repositories/football.repo"

import { TeamEdit } from "./TeamEdit"


export function Team({teamData}) {
  const footballData = useSelector(state => state.footballData)
  const dispatch = useDispatch()

  const [isEditing, setIsEditing] = useState(false)

  const deleteTeam = (e) => {
    e.preventDefault()
    footballRepo.deleteTeam(teamData)
    dispatch(DELETE_TEAM(teamData.id))
  }

  const hideForm = () => {
    setIsEditing(false)
  }

  return (
    <div className="team-data">
      <div className="team-header">
        <div className="team-jerseyColor" style={{backgroundColor : teamData.jerseyColor}}></div>
        <Link to={`/team-notice/${teamData.id}`}><h3>{teamData?.name}</h3></Link>
        <button className="icon-button" onClick={deleteTeam}>
          <i className="fa-solid fa-trash"></i>
        </button>
        <button className="icon-button" onClick={() => setIsEditing(!isEditing)}>
          <i className="fa-regular fa-pen-to-square"></i>
        </button>
      </div>
      {isEditing && <TeamEdit data={teamData} hideForm={hideForm}/>}
    </div>
  )
}