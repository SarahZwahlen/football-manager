import { useParams } from 'react-router-dom'
import { Player } from '../player/Player'

import { useSelector } from 'react-redux'

const TeamNotice = () => {
    const footballData = useSelector(state => state.footballData)
    const params = useParams()
    const team_index = footballData.indexOf(footballData.find(team => team.id === params.id))
    return (
        <main>
            <div className="team-header">
                <div className="team-jerseyColor" style={{backgroundColor : footballData[team_index]?.jerseyColor}}></div>
                <h2>{footballData[team_index]?.name}</h2>
            </div>
            <div>
                <h3>Liste des joueurs : </h3>
                <ul>
                    {footballData[team_index]?.players.map((player, playerindex) => <Player key={playerindex} playerData={player} team_index={team_index} playerIndex={playerindex}/>)}
                </ul>
            </div>
        </main>
    )
}

export default TeamNotice