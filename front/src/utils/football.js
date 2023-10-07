import { v4 as uuid } from "uuid"

const createTeam = (football_state, new_team ) => {
  if( !new_team.name) {
    return {
      has_error: true,
      message: "Veuillez choisir un nom pour votre équipe"
    }
  }
  const isAllreadyTeam = football_state.find(team => team.name.toLowerCase() === new_team.name.toLowerCase())
  if (isAllreadyTeam) {
    return {
      has_error: false,
      message: "Ce nom d'équipe est déjà attribué."
    }
  } else {
    const new_team = {
      ...new_team,
      id: uuid()
    }
    const new_state= [
      ...football_state,
      new_team
    ]
    localStorage.setItem('footballTeams', JSON.stringify(football_state))
    return {
      has_error: false,
      data: new_state
    }
  }
}

const editTeam = (football_state, edited_team) => {
  const team_index = football_state.indexOf(football_state.find(team => team.id === edited_team.id))
  const new_state = [...football_state]
  new_state.splice(team_index, 1, edited_team)
  
  localStorage.setItem('footballTeams', JSON.stringify(new_state))

  return {
    has_error: false,
    data: new_state
  }
}
const deleteTeam = (team_data) => {
  const local_storage = JSON.parse(localStorage.getItem('footballTeams'))
  const updated_local_storage = local_storage.filter(team => team.name !== team_data.name)
  localStorage.setItem('footballTeams', JSON.stringify(updated_local_storage))

}

export {deleteTeam, createTeam, editTeam}