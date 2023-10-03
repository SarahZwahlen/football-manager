// import Teams from "./Teams";
import NewPlayerForm from "../player/NewPlayerForm";
import NewTeamForm from "../team/NewTeamForm";
import TeamList from "../team/TeamList";
import { Ligue1Result } from "../ligue1/Ligue1Result";
import { useState } from "react";

const Main = () => {
    const [isTeamsVisible, setIsTeamsVisible] = useState(true)
    const [isCreateTeamFormVisible, setIsCreateTeamFormVisible] = useState(false)
    const [isCreatePlayerFormVisible, setIsCreatePlayerFormVisible] = useState(false)
    const [isLigueVisible, setIsLigueVisible] = useState(false)

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
                <button className="main-button" onClick={showTeams}>Voir les équipes</button>
                <button className="main-button" onClick={showCreateNewTeam}>Créer une équipe</button>
                <button className="main-button" onClick={showCreatePlayer}>Créer un joueur</button>
                <button className="main-button" onClick={showLigueResult}>Prochain match Ligue1</button>
            </nav>
            {isTeamsVisible && <TeamList/>}
            {isCreateTeamFormVisible && <NewTeamForm showTeams={showTeams}/>}
            {isCreatePlayerFormVisible && <NewPlayerForm showTeams={showTeams}/>}
            {isLigueVisible && <Ligue1Result/>}
            
        </main>
    )
}
export default Main