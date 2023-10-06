
import { UserContext } from "./context/userContext.js";

import { RouterProvider } from "react-router-dom";
import privateRoutes from "./router/privateRoutes.js";
import publicRoutes from "./router/publicRoutes.js";

import { useContext } from "react";

import Layout from "./components/layout/Layout.jsx";

import "./assets/style.scss";



function App() {
  const { currentUser } = useContext(UserContext);

  return (
    <div className="app_container">
        <RouterProvider router={currentUser.isLogged ? privateRoutes : publicRoutes}>
          <Layout />
        </RouterProvider>
    </div>
  );
}


export default App;


