import { createBrowserRouter } from "react-router-dom";

import Layout from "../components/layout/Layout";
import { Login } from "../components/user/Login";
import CreateUser from "../components/user/CreateUser";
import { Ligue1Result } from "../components/ligue1/Ligue1Result";
import NotFound from "../components/layout/NotFound";

const publicRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "ligue_result", element: <Ligue1Result /> },
      { path: "login", element: <Login /> },
      { path: "new-user", element: <CreateUser /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default publicRoutes;
