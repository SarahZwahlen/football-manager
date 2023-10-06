import { v4 as uuid } from "uuid"

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


