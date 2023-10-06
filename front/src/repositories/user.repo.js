import { v4 as uuid } from 'uuid'

const userRepo = {
  logUser : (state,current_user) => {
    return {
      ...state,
      current_user: current_user
    }
  },
  logOut : (state) => {
    return {
      ...state,
      current_user: {}
    }
  },
  createUser : (state, new_user) => {
    const isAllreadyUser = state.find(user => user.email === new_user.email)
    if (isAllreadyUser) {
      return {
        has_error : true,
        message: 'Cet email est déjà associé à un utilisateur'
      }
    } else {
      const new_user_with_id = {
        ...new_user,
        id: uuid()
      }
      return {
        ...state,
        users: [...state.users, , new_user_with_id]
      }
    }
  }
}

export default userRepo