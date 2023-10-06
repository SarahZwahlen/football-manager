import { createSlice } from "@reduxjs/toolkit"
import { v4 as uuid } from "uuid"


export const footballDataSlice = createSlice({
  name: 'footballData',
  initialState: [],
  reducers: {
    ADD_TEAM: {
      reducer: (state, action) => {
        state.push(action.payload)
      },
      prepare: (team) => {
        const team_id = uuid()
        return { payload: {team_id: team_id, team}}
      }
    },
    DELETE_TEAM: (state, action) => {
        return [
          ...state.filter(team => team.team_id !== action.payload.team_id)
        ]
    },
    EDIT_TEAM: (state, action) => {
      const isAlreadyTeam = state.teams.find(team => team.name.toLowerCase() === action.payload.name)
      if (isAlreadyTeam) {
        return "Le nom de l'équipe est déjà pris"
      } else {
        return [
          ...state,
          [action.payload.id] 
        ]
      }
    }
  } 
})

export const { ADD_TEAM, DELETE_TEAM, EDIT_TEAM} = footballDataSlice.actions
export default footballDataSlice.reducer

// const footBallReducer = (state = initialState, action ) => {
//
//     case "UPDATE_TEAM": {
//       const isAlreadyTeam = state.teams.find(team => team.name.toLowerCase() === action.payload.name)
//       if (isAlreadyTeam) {
//         return "Le nom de l'équipe éxiste déjà"
//       } else {
//          return {
//           ...state,
//           teams: [
//             ...state.teams.filter((team, team_index) => team_index !== action.payload.name)
//           ]
//          }
//       }
//     }
//     case "ADD_PLAYER": {

//     }
//     case "DELETE_PLAYER": {

//     }
//     case "UPDATE_PLAYER": {

//     }
//     default: return state
//   }
// }

// export default footBallReducer