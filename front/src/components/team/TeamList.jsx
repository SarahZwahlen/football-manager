import { Team } from './Team.jsx'

import { useSelector } from "react-redux"

import { useEffect } from "react"

const TeamList = () => {
    const footballData = useSelector(state => state.footballData)

    useEffect(() => {
        const localTeamData = JSON.parse(localStorage.getItem("footballTeams"))
        // if (localTeamData) setFootballData(localTeamData)
    },[])
    
    return (
        <main>
            {footballData.length >0 && <h2>Liste des équipes</h2>}
            {footballData.map((team, index) => <Team teamData={team} key={index}/>) }   
        </main>
    )
}

export default TeamList