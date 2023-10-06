import { useState } from "react";

import { useSelector } from "react-redux";

import NewPlayerForm from "../player/NewPlayerForm";
import NewTeamForm from "../team/NewTeamForm";
import TeamList from "../team/TeamList";
import { Ligue1Result } from "../ligue1/Ligue1Result";
import { Login } from "../user/Login";
import CreateUser from "../user/CreateUser";

const Main = () => {
  const [isTeamsVisible, setIsTeamsVisible] = useState(true)
  const [isCreateTeamFormVisible, setIsCreateTeamFormVisible] = useState(false)
  const [isCreatePlayerFormVisible, setIsCreatePlayerFormVisible] = useState(false)
  const [isLigueVisible, setIsLigueVisible] = useState(false)

  const user = useSelector(state => state.users)
  const is_logged = user.currentUser

  const showTeams = () => {
    setIsTeamsVisible(true)
    setIsCreateTeamFormVisible(false)
    setIsCreatePlayerFormVisible(false)
    setIsLigueVisible(false)
  }

  const showCreateNewTeam = () => {
    setIsTeamsVisible(false)
    setIsCreateTeamFormVisible(true)
    setIsCreatePlayerFormVisible(false)
    setIsLigueVisible(false)
  }

  const showCreatePlayer = () => {
    setIsTeamsVisible(false)
    setIsCreateTeamFormVisible(false)
    setIsCreatePlayerFormVisible(true)
    setIsLigueVisible(false)
  }
  const showLigueResult = () => {
    setIsLigueVisible(true)
    setIsCreatePlayerFormVisible(false)
    setIsTeamsVisible(false)
    setIsCreateTeamFormVisible(false)
  }

  return (
    <main>
      <div>Hello</div>
      {(isTeamsVisible && is_logged) && <TeamList/>}
      {(isCreateTeamFormVisible && is_logged) && <NewTeamForm showTeams={showTeams}/>}
      {(isCreatePlayerFormVisible && is_logged) && <NewPlayerForm showTeams={showTeams}/>}
      {isLigueVisible && <Ligue1Result/>}
      {!is_logged && <Login/>}
      {!is_logged && <CreateUser />}
    </main>
  )
}
export default Main