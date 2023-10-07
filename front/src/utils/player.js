import { v4 as uuid } from "uuid"

const createPlayer = (football_state, new_player, team_id) => {
    if (!new_player.age) {
      return {
        has_error : true, 
        message : "Le joueur est trop vieux"
      }
    }
    const team_to_update = football_state.find(team => team.id === team_id)
    if (!team_id) {
      return {
        has_error : true, 
        message : "Aucune équipe n'a été choisie" 
      }
    }
    const none_starter_count = team_to_update.players.reduce((acc, value) => value.isStarterPlayer === false ? acc = acc +1 : acc, 0)
    if (none_starter_count >= 2 && !new_player.isStarterPlayer) {
      return {
        has_error : true, 
        message : "Il y a déjà deux remplaçant"
      }
    }
    if (team_to_update.players.length >=7) {
      return {
        has_error : true, 
        message : "L'équipe est complète" 
      }
    }
    const new_player_with_id = {
      ...new_player,
      id: uuid()
    }
    const team_index = football_state.indexOf(football_state.find(team => team.id === team_id))
    const rest_of_teams = football_state.filter(team => team.name !== team_id)
    const updated_team = {
      ...team_to_update,
      players: [...team_to_update.players, new_player_with_id]
    }
    const new_state = [...rest_of_teams]
    new_state.splice(team_index, 1,updated_team )  
    localStorage.setItem("footballTeams", JSON.stringify(new_state))
    return { 
      has_error : false,
      data : new_state
    }
  }

const editPlayer = (football_state, updated_player , team_index) => {
  if (!updated_player?.age) {
    return 'Le joueur est trop vieux'
  }
  const none_starter_count = football_state[team_index].players.reduce((acc, value) => value.isStarterPlayer === false ? acc = acc + 1 : acc, 0)
  if (none_starter_count >= 2 && !updated_player.isStarterPlayer) {
    return {
      has_error : true, 
      message : "Il y a déjà deux remplaçant"
    }
  }
  if (football_state[team_index].players.length >=7) {
    return {
      has_error : true, 
      message : "L'équipe est complète" 
    }
  }
  const team_players = football_state[team_index].players
  const player_index = team_players.indexOf(team_players.find(player => player.id === updated_player.id))
  const new_player = [...team_players]
  new_player.splice(player_index, 1, updated_player)
  const updated_team = {
    ...football_state[team_index],
    players: new_player
  }
  const updatedState = [...football_state]
  updatedState.splice(team_index, 1, updated_team)
  return {
    has_error: false,
    data: updatedState
  }
}

const deletePlayer = (football_state, player_id, team_index) => {
  const team_players = football_state[team_index].players
  const player_index = team_players.indexOf(team_players.find(player => player.id === player_id))
  const new_player = [...team_players]
  new_player.splice(player_index, 1)
  const updated_team = {
    ...football_state[team_index],
    players: new_player
  }
  const updated_state = [...football_state]
  updated_state.splice(team_index, 1, updated_team)
  return {
    has_error: false,
    data: updated_state
  }
}

export {createPlayer, editPlayer, deletePlayer}