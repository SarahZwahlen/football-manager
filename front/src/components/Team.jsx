import { Context } from "../context/football_app_context"
import { TeamEdit } from "./TeamEdit"
import { Player } from "./Player"
import { useContext, useState } from "react"

export function Team({teamData, index}) {
    const { footballData, setFootballData } = useContext(Context)
    const [isEditing, setIsEditing] = useState(false)
    const deleteTeam = (index) => {
        const updatedData = footballData.filter((item, itemIndex) => itemIndex !== index)
        setFootballData(updatedData)
    }
    return (
        <div className="team-data">
            <div>
                <div className="team-header">
                    <div className="team-jerseyColor" style={{backgroundColor : teamData.jerseyColor}}></div>
                    <h3>{teamData?.name}</h3>
                    <button className="icon-button" onClick={() => deleteTeam(index)}>
                        <i className="fa-solid fa-trash"></i>
                    </button>
                    <button className="icon-button" onClick={() => setIsEditing(!isEditing)}>
                        <i className="fa-regular fa-pen-to-square"></i>
                    </button>
                </div>
                {isEditing && 
                    <TeamEdit index={index} >
                        <h3>Modifier l'équipe</h3>
                    </TeamEdit>
                }
            </div>
            <div>
                <h4>Liste des joueurs : </h4>
                <ul>
                    {teamData.players.map((player, playerindex) => <Player playerData={player} teamIndex={index} playerIndex={playerindex}/>)}
                </ul>
            </div>
        </div>
    )
}