const initialState = {
  teams: [],
  user: []
}

const footBallReducer = (state = initialState, action ) => {
  switch (action.type) {
    case "ADD_TEAM": {
      const isAlreadyTeam = state.teams.find(team => team.name.toLowerCase() === action.payload.name.toLowerCase())
      if (isAlreadyTeam) {
        return "L'équipe est déjà présente"
      } else {
        return {
          ...state,
          teams: [
            ...state.teams,
            ...action.payload
          ]
        }
      }

    }
    case "DELETE_TEAM": {
      return {
        ...state,
        teams: [
          ...state.teams.filter((team, team_index) => team_index !== action.payload.index)
        ]
      }
    }
    case "UPDATE_TEAM": {
      const isAlreadyTeam = state.teams.find(team => team.name.toLowerCase() === action.payload.name)
      if (isAlreadyTeam) {
        return "Le nom de l'équipe éxiste déjà"
      } else {
         return {
          ...state,
          teams: [
            ...state.teams.filter((team, team_index) => team_index !== action.payload.name)
          ]
         }
      }
    }
    case "ADD_PLAYER": {

    }
    case "DELETE_PLAYER": {

    }
    case "UPDATE_PLAYER": {

    }
    default: return state
  }
}

export default footBallReducer