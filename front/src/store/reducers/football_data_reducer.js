import { createSlice } from "@reduxjs/toolkit"
import { v4 as uuid } from "uuid"


export const footballDataSlice = createSlice({
  name: 'footballData',
  initialState: [],
  reducers: {
    ADD_TEAM: (state, action) => {
      return action.payload
    },
    DELETE_TEAM: (state, action) => {
      return state.filter(team => team.id !== action.payload)
    },
    EDIT_TEAM: (state, action) => {
      return action.payload
    },
    CREATE_PLAYER : (state, action) => {
      return action.payload
    },
    DELETE_PLAYER : (state, action) => {
      return action.payload
    },
    EDIT_PLAYER : () => {}
    },
    
  } 
)

export const { ADD_TEAM, DELETE_TEAM, EDIT_TEAM, CREATE_PLAYER, DELETE_PLAYER, EDIT_PLAYER} = footballDataSlice.actions
export default footballDataSlice.reducer
