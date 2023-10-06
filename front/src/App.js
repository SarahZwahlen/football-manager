import { useSelector } from "react-redux";

import { RouterProvider } from "react-router-dom";
import privateRoutes from "./router/privateRoutes.js";
import publicRoutes from "./router/publicRoutes.js";

import { useState } from "react";

import Layout from "./components/layout/Layout.jsx";

import "./assets/style.scss";

function App() {
  const user = useSelector(state => state.users)
  const [userIsLogged, setUserIsLogged] = useState(user.current_user ? true : false)
  //userIsLogged ? privateRoutes : publicRoutes

  return (
    <div className="app_container">
      <RouterProvider router={privateRoutes}>
        <Layout />
      </RouterProvider>
    </div>
  );
}


export default App;


