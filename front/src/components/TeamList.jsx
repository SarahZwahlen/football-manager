import { Context } from "../context/football_app_context"
import { EditTeam } from "./TeamEdit"

import { useContext, useState } from "react"

const TeamList = () => {
    const { footballData, setFootballData } = useContext(Context)
    const [isEditing, setEditing] = useState(false)
    const andleNewTeam = (index) => {
        const updatedData = footballData.filter((item, itemIndex) => itemIndex !== index)
        setFootballData(updatedData)
    }
    const handleEdit = (index) => {
        
    }
    return (
        <section>
            <h2>Liste des équipes</h2>
            {footballData.map((team, index) => {
                return (
                <div>
                    <p style={{color : team.color}}>{team?.name}</p>
                    <ul>
                        {team.players.map(player => {return <li>{player.name}</li>})}
                    </ul>
                    <button onClick={() => handleNewTeam(index)}>Delete</button>
                    <button onClick={() => setEditing(!isEditing)}>Edit</button>
                    <EditTeam>
            
                    </EditTeam>
                </div>
               )
            })}     
        </section>
    )
}

export default TeamList