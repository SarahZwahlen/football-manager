import { createContext, useState } from "react";

const UserContext = createContext();

const UserContextComponent = ({ children }) => {
  const [users, setUsers] = useState([
    { name: "admin", email: "test@mail.com", password: "123" },
  ]);

  const userInitialState = {
    name: null,
    isLogged: false,
    email: null,
    password: null,
  };

  const [currentUser, setCurrentUser] = useState(userInitialState);

  const createUser = (userData) => {
    const userExists = users.find((user) => user.email === userData.email);

    if (userExists) {
      return {
        isCreated: false,
        error: "Cet email est déjà utilisé par un autre utilisateur.",
      };
    }

    setUsers([...users, userData]);
    setCurrentUser({ ...userData, isLogged: true });

    return { isCreated: true, error: null, user: userData };
  };

  const logUser = (userData) => {
    const user = users.find(
      (existingUser) => existingUser.email === userData.email
    );

    if (!user) {
      return false;
    }

    if (userData.password === user.password) {
      setCurrentUser({ ...user, isLogged: true });
      return true;
    }

    return false;
  };

  const logout = () => {
    setCurrentUser(userInitialState);
  };

  const userContextDatas = {
    currentUser,
    createUser,
    logUser,
    logout,
  };

  return (
    <UserContext.Provider value={userContextDatas}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContextComponent, UserContext };
