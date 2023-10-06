const userRepo = {
  logUser : () => {},
  logOut : () => {},
  createUser : (usersState, newUserData) => {
    const newUsersState = [...usersState]
    const isUserAlreadyExisting = usersState.find(user => user.email === newUserData.email)
    if(isUserAlreadyExisting){
      return {
        isCreated : false, 
        error : "Cet email est déjà utilisé par un autre utilisateur."
        }
    }
    newUsersState.push(newUserData)
    return newUsersState
  }
}

export default userRepo