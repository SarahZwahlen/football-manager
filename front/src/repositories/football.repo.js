import { v4 as uuid } from "uuid"

const footballRepo = {
    
        createTeam : (footballState, teamData) => {
            const isAlreadyTeam = footballState.find(team => team.name.toLowerCase() === teamData.name.toLowerCase())
            if (isAlreadyTeam) {
                return {
                    isError : true, 
                    message : "Ce nom de d'équipe est déjà attribué."}
            }
            else {
                const newTeam ={...teamData, id : uuid()}
                const newState = [...footballState, newTeam] 

                const localStorageTeams = localStorage.getItem("footballTeams") ? JSON.parse(localStorage.getItem("footballTeams")) : []
                localStorage.setItem("footballTeams", JSON.stringify(newState))
                
                return    {
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
        createPlayer : (footballState, newPlayerData, teamName) => {
            if(!newPlayerData.age){
            return {isErrror : true, 
            message : "Le joueur est trop vieux"}
            }
            
            const teamToUpdate = footballState.find(team => team.name === teamName)

            if(!teamName){
                return {
                    isError : true, 
                    message : "Aucune équipe n'a été choisie" 
                }
            }
            const nonStarterPlayerCount = teamToUpdate.players.reduce((acc, value) => value.isStarterPlayer === false ? acc = acc +1 : acc, 0)

            if(nonStarterPlayerCount >= 2 && !newPlayerData.isStarterPlayer){
                return {
                    isError : true, 
                    message : "Il y a déjà deux remplaçant"
                }
            }

            if(teamToUpdate.players.length >=7){
                return {
                    isError : true, 
                    message : "L'équipe est complète" 
                }
            }
            
            teamToUpdate.players.push(newPlayerData)

            
            const localTeamsData = JSON.parse(localStorage.getItem("footballTeams"))
            const newLocalData = localTeamsData.filter(team => team.name !== teamName)
            newLocalData.push(teamToUpdate)

        },
        editPlayer : ()=> {},
        deletePlayer : (state, player_id, team_id) => {
          const team_player = state.find(team => team.team_id === team_id)
          team_player.splice()
        }
    
}


export default footballRepo


