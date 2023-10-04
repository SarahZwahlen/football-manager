import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Context } from "../../context/football_app_context"

const PlayerNotice = () => {
    const [playerData, setPlayerData] = useState({})
    const {footballData} = useContext(Context)

    const params = useParams()
    useEffect(() => {
        const playerId = params.player_id
        const player = footballData.map(team => team.players.find(player => player.id === playerId))[0]
        if(player) setPlayerData(player)
},[])

    return <main>
        <h2>{playerData.name}</h2>
        <p>Age : {playerData.age} ans</p>
        <p>Poste : {playerData.playerPosition}</p>
        <p>{playerData.isStarterPlayer ? "titulaire" : "remplaçant"}</p>
    </main>
}

export default PlayerNotice