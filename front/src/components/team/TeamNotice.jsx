import { useContext, useState, useEffect } from 'react'
import { Context } from '../../context/football_app_context'
import { useParams } from 'react-router-dom'
import { Player } from '../player/Player'

const TeamNotice = () => {
    const [teamData, setTeamData] = useState({players : []})
    const [index, setIndex] = useState(null)
    const { footballData } = useContext(Context)
    const params = useParams()
    
    useEffect(() => {
        const teamName = params.team_name
        const team = footballData.find(team => team.name === teamName)
        setIndex(footballData.indexOf(team))
        setTeamData(team)
    }, [])
    


    return (
        <main>
            <div className="team-header">
            <div className="team-jerseyColor" style={{backgroundColor : teamData.jerseyColor}}></div>
            <h2>{teamData?.name}</h2>
            </div>
            <div>
                <h3>Liste des joueurs : </h3>
                <ul>
                    {teamData?.players.map((player, playerindex) => <Player playerData={player} teamIndex={index} playerIndex={playerindex}/>)}
                </ul>
            </div>
        </main>
    )
}

export default TeamNotice