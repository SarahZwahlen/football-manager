import { v4 as uuid } from "uuid";

const logUser = (users_state, user) => {
  const is_user = users_state.find(user => user.email === user.email)
  if (!is_user) {
    return {
      has_error: true,
      message: "Adresse email invalide."
    }
  }
  const has_wright_password = is_user.password === user.password
  if (!has_wright_password) {
    return {
      has_error: true,
      message: "Mot de passe invalide."
    }
  }

  localStorage.setItem("current_user", JSON.stringify({...user}))
  return {
    has_error: false, 
    data: {
      ...users_state,
      current_user: user
    }
  }
}

const logOut = (users_state) => {
  localStorage.removeItem('current_user')
  return {
    ...users_state,
    current_user: {}
  }
}

const createUser = (users_state, new_user) => {
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
  const isAllreadyUser = users_state.users.find(user => user.email === new_user.email)
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
      ...users_state,
      users: [...users_state.users, new_user_with_id]
    }))

    return {
      has_error: false,
      data : {
        ...users_state,
        users: [...users_state.users, new_user_with_id]
      }
    }
  }
}

export {logOut, logUser, createUser}