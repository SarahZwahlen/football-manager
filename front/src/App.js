import { FootballDataProvider } from "./context/football_app_context.js";
import { UserContextComponent } from "./context/userContext.js";
import "./assets/style.scss";
import Layout from "./components/layout/Layout.jsx";
import { RouterProvider } from "react-router-dom";
import router from "./router/routes.js";

function App() {
  return (
    <div className="app_container">
      <UserContextComponent>
        <FootballDataProvider>
          <RouterProvider router={router}>
            <Layout />
          </RouterProvider>
        </FootballDataProvider>
      </UserContextComponent>
    </div>
  );
}

export default App;
