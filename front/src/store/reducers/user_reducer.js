import {createSlice} from "@reduxjs/toolkit"

const usersSlice = createSlice({
  name : "users",
  initialState : {
    users : [{ name: "admin", email: "test@mail.com", password: "123" }], 
    currentUser : {
      isLogged : false
}},
  reducers : {
    ADD_USER : (state, action) => {},
  }
}) 