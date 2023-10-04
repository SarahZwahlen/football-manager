import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import TeamList from "../components/team/TeamList";
import NewTeamForm from "../components/team/NewTeamForm";
import { Player } from "../components/player/Player";
import NewPlayerForm from "../components/player/NewPlayerForm";
import { Ligue1Result } from "../components/ligue1/Ligue1Result";
import { Login } from "../components/user/Login";
import CreateUser from "../components/user/CreateUser";
import NotFound from "../components/layout/NotFound";
import PlayerNotice from "../components/player/PlayerNotice";
import TeamNotice from "../components/team/TeamNotice";

const privateRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "player", element: <Player /> },
      { path: "team-list", element: <TeamList /> },
      { path: "team-create", element: <NewTeamForm /> },
      { path: "player-create", element: <NewPlayerForm /> },
      { path: "ligue_result", element: <Ligue1Result /> },
      { path: "login", element: <Login /> },
      { path: "new-user", element: <CreateUser /> },
      { path: "*", element: <NotFound /> },
      { path: "player-notice/:player_id", element: <PlayerNotice /> },
      { path: "team-notice/:team_name", element: <TeamNotice /> },
    ],
  },
]);

export default privateRoutes;
