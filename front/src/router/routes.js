import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import TeamList from "../components/team/TeamList";
import NewTeamForm from "../components/team/NewTeamForm";
import { Player } from "../components/player/Player";
import NewPlayerForm from "../components/player/NewPlayerForm";
import { Ligue1Result } from "../components/ligue1/Ligue1Result";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "player", element: <Player /> },
      { path: "team-list", element: <TeamList /> },
      { path: "team-create", element: <NewTeamForm /> },
      { path: "player-create", element: <NewPlayerForm /> },
      { path: "ligue_result", element: <Ligue1Result /> },
    ],
  },
]);

export default router;
// team/:team_id/player/:pkayer_id

// const team =  [{
// id : String,
// name : String,
// jerseyColor : String,
// players : Player[]
// }]

// const player = [{
//     id : String,
//     name : String,
//     age : Number,
//     Position : String,
//     isStaterPlayer : Boolean ,
//     teamId : string
// }]