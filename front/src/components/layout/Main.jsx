// import Teams from "./Teams";
import NewPlayerForm from "../player/NewPlayerForm";
import NewTeamForm from "../team/NewTeamForm";
import TeamList from "../team/TeamList";
import { Ligue1Result } from "../ligue1/Ligue1Result";
import { useState, useContext } from "react";
import { UserContext } from "../../context/userContext";
import { Login } from "../user/Login";
import CreateUser from "../user/CreateUser";

const Main = () => {
    const [isTeamsVisible, setIsTeamsVisible] = useState(true)
    const [isCreateTeamFormVisible, setIsCreateTeamFormVisible] = useState(false)
    const [isCreatePlayerFormVisible, setIsCreatePlayerFormVisible] = useState(false)
    const [isLigueVisible, setIsLigueVisible] = useState(false)

    const { currentUser } = useContext(UserContext);
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
            <nav className="main-action-buttons">
                {currentUser.isLogged && <button className="main-button" onClick={showTeams}>Voir les équipes</button>}
                {currentUser.isLogged && <button className="main-button" onClick={showCreateNewTeam}>Créer une équipe</button>}
                {currentUser.isLogged && <button className="main-button" onClick={showCreatePlayer}>Créer un joueur</button>}
                <button className="main-button" onClick={showLigueResult}>Prochain match Ligue1</button>
            </nav>
            {(isTeamsVisible && currentUser.isLogged) && <TeamList/>}
            {(isCreateTeamFormVisible && currentUser.isLogged) && <NewTeamForm showTeams={showTeams}/>}
            {(isCreatePlayerFormVisible && currentUser.isLogged) && <NewPlayerForm showTeams={showTeams}/>}
            {isLigueVisible && <Ligue1Result/>}
            {!currentUser.isLogged && <Login/>}
            {!currentUser.isLogged && <CreateUser />}
        </main>
    )
}
export default Main