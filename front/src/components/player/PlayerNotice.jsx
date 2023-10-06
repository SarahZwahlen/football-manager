import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"

const PlayerNotice = () => {
    const football = useSelector(state => state.footballData)
    const params = useParams()
    const current_team = football.find(team => team.players.find(player => player.id === params.player_id))
    const current_player = current_team.players.find(player => player.id === params.player_id)

    return <main>
        <h2>{current_player.name}</h2>
        <p>Age : {current_player.age} ans</p>
        <p>Poste : {current_player.playerPosition}</p>
        <p>{current_player.isStarterPlayer ? "titulaire" : "remplaçant"}</p>
    </main>
}

export default PlayerNotice