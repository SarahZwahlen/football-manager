import { v4 as uuid } from 'uuid'

const userRepo = {
  logUser : (state, current_user) => {
    const isUser = state.users.find(user => user.email === current_user.email)
    if (!isUser) {
      return {
        has_error: true, 
        message: "Adresse email invalide"
      }
    }
    const has_wright_password = isUser.password === current_user.password
    if (!has_wright_password) {
      return {
        has_error: true,
        message: 'Mot de passe invalide'
      }
    }
    localStorage.setItem("currentUser", JSON.stringify({
      ...current_user,
      isLogged: true
    }))
    return {
      has_error: false,
      data: {
        ...state,
        current_user: current_user
      }
    }
  },
  logOut : (state) => {
    return {
      ...state,
      current_user: {}
    }
  },
  createUser : (state, new_user) => {
    if (!new_user.email) {
      return {
        has_error: true, 
        message: "Un email est obligatoire"
      }
    }
    if (!new_user.password) {
      return {
        has_error: true,
        message: 'Un mot de passe est nécessaire'
      }
    }
    if (!new_user.name) {
      return {
        has_error: true,
        message: 'Un nom est nécessaire'
      }
    }
    const isAllreadyUser = state.users.find(user => user.email === new_user.email)
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

      localStorage.setItem("current_user", JSON.stringify({
        ...state,
        users: [...state.users, new_user_with_id]
      }))

      return {
        has_error: false,
        data : {
          ...state,
          users: [...state.users, new_user_with_id]
        }
      }
    }
  }
}

export default userRepo