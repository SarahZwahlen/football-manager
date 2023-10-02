// import Teams from "./Teams";
import NewPlayerForm from "./NewPlayerForm";
import NewTeamForm from "./NewTeamForm";
import TeamList from "./TeamList";
import { useState } from "react";

const Main = () => {
    const [isTeamsVisible, setIsTeamsVisible] = useState(true)
    const [isCreateTeamFormVisible, setIsCreateTeamFormVisible] = useState(false)
    const [isCreatePlayerFormVisible, setIsCreatePlayerFormVisible] = useState(false)

    const showTeams = () => {
        setIsTeamsVisible(true)
        setIsCreateTeamFormVisible(false)
        setIsCreatePlayerFormVisible(false)
    }

    const showCreateNewTeam = () => {
        setIsTeamsVisible(false)
        setIsCreateTeamFormVisible(true)
        setIsCreatePlayerFormVisible(false)
    }

    const showCreatePlayer = () => {
        setIsTeamsVisible(false)
        setIsCreateTeamFormVisible(false)
        setIsCreatePlayerFormVisible(true)
    }


    return (
        <main>
            <div className="main-action-buttons">
                <button className="main-button" onClick={showTeams}>Voir les équipes</button>
                <button className="main-button" onClick={showCreateNewTeam}>Créer une équipe</button>
                <button className="main-button" onClick={showCreatePlayer}>Créer un joueur</button>
            </div>
            {isTeamsVisible && <TeamList/>}
            {isCreateTeamFormVisible && <NewTeamForm showTeams={showTeams}/>}
            {isCreatePlayerFormVisible && <NewPlayerForm showTeams={showTeams}/>}
            
        </main>
    )
}
export default Main