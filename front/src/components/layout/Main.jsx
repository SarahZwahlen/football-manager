import { useSelector } from "react-redux";

import NewPlayerForm from "../player/NewPlayerForm";
import NewTeamForm from "../team/NewTeamForm";
import TeamList from "../team/TeamList";
import { Ligue1Result } from "../ligue1/Ligue1Result";
import { Login } from "../user/Login";
import CreateUser from "../user/CreateUser";

const Main = () => {
  const user = useSelector(state => state.users)
  const is_logged = user.current_user.hasOwnProperty('email')

  return (
    <main>
      {is_logged && <TeamList />}
      {is_logged && <NewTeamForm />}
      {is_logged && <NewPlayerForm />}
      <Ligue1Result/>
      {!is_logged && <Login />}
      {!is_logged && <CreateUser />}
    </main>
  )
}
export default Main