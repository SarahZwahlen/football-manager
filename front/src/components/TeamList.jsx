import { Context } from "../context/football_app_context"
import { Team } from './Team.jsx'

import { useContext } from "react"

const TeamList = () => {
    const { footballData } = useContext(Context)
    
    return (
        <section>
            <h2>Liste des équipes</h2>
            {footballData.map((team, index) => <Team teamData={team} index={index} key={index}/>) }   
        </section>
    )
}

export default TeamList