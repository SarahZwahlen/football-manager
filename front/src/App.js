import { useSelector } from "react-redux";

import { RouterProvider } from "react-router-dom";
import privateRoutes from "./router/privateRoutes.js";
import publicRoutes from "./router/publicRoutes.js";

import Layout from "./components/layout/Layout.jsx";

import "./assets/style.scss";

function App() {
  const user = useSelector(state => state.users)
  const isLogged = user.current_user.hasOwnProperty("email") ? privateRoutes : publicRoutes

  return (
    <div className="app_container">
      <RouterProvider router={isLogged}>
        <Layout />
      </RouterProvider>
    </div>
  );
}


export default App;


