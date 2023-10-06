import {createSlice} from "@reduxjs/toolkit"

const usersSlice = createSlice({
  name : "users",
  initialState : {
    users : [
      { 
        name: "admin", 
        email: "test@mail.com",
        password: "123" 
      }
    ], 
    currentUser : {}
  },
  reducers : {
    ADD_USER : (state, action) => {
      return action.payload
    },
    LOG_IN: (state, action) => {
      return action.payload
    },
    LOG_OUT: (state, action) => {
      return action.payload
    }
  }
})

export const { ADD_USER, LOG_IN, LOG_OUT} = usersSlice.actions
export default usersSlice.reducer
