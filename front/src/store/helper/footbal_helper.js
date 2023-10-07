import { data } from "jquery"
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
const deleteTeam = (team) => {
  const local_storage = JSON.parse(localStorage.getItem('footballTeams'))
  const updated_local_storage = local_storage.filter(team => team.name !== data.name)
  localStorage.setItem('footballTeams', JSON.stringify(updated_local_storage))

}

const createPlayer = (football_state, new_player, team_id) => {
  if (!new_player.age) {
    return {
      has_error: true,
      message: "Le joueur est trop vieux."
    }
  }
  if (!team_id) {
    return {
      has_error: true,
      message: "Veuillez choisir une équipe."
    }
  }
  const player_team = football_state.find(team => team.id === team_id)
  const none_starter_count = player_team.players.reduce((acc, player) => player.isStarterPlayer ? acc : acc=acc+1, 0 )
  if (none_starter_count >= 2 && !new_player.isStarterPlayer) {
    return {
      has_error: true,
      message: "Il y a déjà deux remplaçant."
    }
  }
  if (player_team.players.length >=7 ) {
    return {
      has_error: true,
      message: "L'équipe est complète."
    }
  }

  const rest_of_teams = football_state.filter(team => team.id !== team_id)
  const updated_team = {
    ...player_team,
    players: [...player_team.players, new_player]
  }
  const team_index = football_state.indexOf(football_state.find(team => team.id === team_id))
  
}

const footballRepo = {
  createTeam : (footballState, teamData) => {
    const isAlreadyTeam = footballState.find(team => team.name.toLowerCase() === teamData.name.toLowerCase())
    if (isAlreadyTeam) {
      return {
        isError : true, 
        message : "Ce nom de d'équipe est déjà attribué."
      }
    }
    else {
      const newTeam ={...teamData, id : uuid()}
      const newState = [...footballState, newTeam] 

      const localStorageTeams = localStorage.getItem("footballTeams") ? JSON.parse(localStorage.getItem("footballTeams")) : []
      localStorage.setItem("footballTeams", JSON.stringify(newState))
                
      return {
        isError : false,
        data : newState
      }
    }
  }, 
  deleteTeam: (data) => {
    const localTeamData = JSON.parse(localStorage.getItem("footballTeams"))
    const newLocalTeamData = localTeamData.filter(team => team.name !== data.name)
    localStorage.setItem("footballTeams", JSON.stringify(newLocalTeamData))
  },
  editTeam : (state, newTeamData) => {
    const current_team_index = state.indexOf(state.find(team => team.id === newTeamData.id))
    const new_state = [...state]
    new_state.splice(current_team_index , 1, newTeamData)
    localStorage.setItem('footballTeams', JSON.stringify(new_state))
    return {
      isError: false,
      data: new_state
    }
  },
  createPlayer : (footballState, newPlayerData, teamId) => {
    const teamIndex = footballState.indexOf(footballState.find(team => team.id === teamId))
    if (!newPlayerData.age) {
      return {
        isErrror : true, 
        message : "Le joueur est trop vieux"
      }
    }
    const teamToUpdate = footballState.find(team => team.id === teamId)
    if (!teamId) {
      return {
        isError : true, 
        message : "Aucune équipe n'a été choisie" 
      }
    }
    const nonStarterPlayerCount = teamToUpdate.players.reduce((acc, value) => value.isStarterPlayer === false ? acc = acc +1 : acc, 0)
    if (nonStarterPlayerCount >= 2 && !newPlayerData.isStarterPlayer) {
      return {
        isError : true, 
        message : "Il y a déjà deux remplaçant"
      }
    }
    if (teamToUpdate.players.length >=7) {
      return {
        isError : true, 
        message : "L'équipe est complète" 
      }
    }
    const FootballTeamRest = footballState.filter(team => team.name !== teamId)
    const updatedTeam = {
      ...teamToUpdate,
      players: [...teamToUpdate.players, newPlayerData]
    }
    const newState = [...FootballTeamRest]
    newState.splice(teamIndex, 1,updatedTeam )  
    localStorage.setItem("footballTeams", JSON.stringify(newState))
    return { 
      isError : false,
      data : newState
    }
  },
  editPlayer : (state, updated_player , team_index) => {
    if (!updated_player?.age) {
      return 'Le joueur est trop vieux'
    }
    const nonStarterPlayerCount = state[team_index].players.reduce((acc, value) => value.isStarterPlayer === false ? acc = acc + 1 : acc, 0)
    if (nonStarterPlayerCount >= 2 && !updated_player.isStarterPlayer) {
      return {
        isError : true, 
        message : "Il y a déjà deux remplaçant"
      }
    }
    if (state[team_index].players.length >=7) {
      return {
        isError : true, 
        message : "L'équipe est complète" 
      }
    }
    const team_players = state[team_index].players
    const player_index = team_players.indexOf(team_players.find(player => player.id === updated_player.id))
    const newPlayers = [...team_players]
    newPlayers.splice(player_index, 1, updated_player)
    const updatedTeam = {
      ...state[team_index],
      players: newPlayers
    }
    const updatedState = [...state]
    updatedState.splice(team_index, 1, updatedTeam)
    return {
      isError: false,
      data: updatedState
    }
  },
  deletePlayer : (state, player_id, team_index) => {
    const team_players = state[team_index].players
    const player_index = team_players.indexOf(team_players.find(player => player.id === player_id))
    const newPlayer = [...team_players]
    newPlayer.splice(player_index, 1)
    const updatedTeam = {
      ...state[team_index],
      players: newPlayer
    }
    const updatedState = [...state]
    updatedState.splice(team_index, 1, updatedTeam)
    return {
      isError: false,
      data: updatedState
    }
  }
}


export default footballRepo


