
import { UserContext } from "./context/userContext.js";

import { RouterProvider } from "react-router-dom";
import privateRoutes from "./router/privateRoutes.js";
import publicRoutes from "./router/publicRoutes.js";

import { useContext, useEffect, useState } from "react";

import Layout from "./components/layout/Layout.jsx";

import "./assets/style.scss";

function App() {
  const [userIsLogged, setUserIsLogged] = useState(false)
  const { currentUser, setCurrentUser } = useContext(UserContext);

  useEffect(() => {
    const currentLocalUser = JSON.parse(localStorage.getItem("currentUser"))
    console.log("local user", currentLocalUser)
    console.log("is Logged", userIsLogged)

    if(currentLocalUser) {
      setCurrentUser(currentLocalUser)
      setUserIsLogged(true)
    } else {
      setUserIsLogged(false)
    }
  }, [])

  return (
    <div className="app_container">
      <RouterProvider router={userIsLogged ? privateRoutes : publicRoutes}>
        <Layout />
      </RouterProvider>
    </div>
  );
}


export default App;


