import { Link } from "react-router-dom"
import { Context } from "../../context/football_app_context"
import { TeamEdit } from "./TeamEdit"
import { useContext, useState } from "react"

export function Team({teamData, index}) {
    const { footballData, setFootballData } = useContext(Context)
    const [isEditing, setIsEditing] = useState(false)

    const deleteTeam = (index) => {
        const localTeamData = JSON.parse(localStorage.getItem("footballTeams"))
        const newLocalTeamData = localTeamData.filter(team => team.name !== teamData.name)
        localStorage.setItem("footballTeams", JSON.stringify(newLocalTeamData))

        const updatedData = footballData.filter((item, itemIndex) => itemIndex !== index)
        setFootballData(updatedData)

    }

    return (
        <div className="team-data">
                <div className="team-header">
                    <div className="team-jerseyColor" style={{backgroundColor : teamData.jerseyColor}}></div>
                    <Link to={`/team-notice/${teamData.name}`}><h3>{teamData?.name}</h3></Link>
                    <button className="icon-button" onClick={() => deleteTeam(index)}>
                        <i className="fa-solid fa-trash"></i>
                    </button>
                    <button className="icon-button" onClick={() => setIsEditing(!isEditing)}>
                        <i className="fa-regular fa-pen-to-square"></i>
                    </button>
                </div>
                {isEditing && <TeamEdit index={index} />}
        </div>
    )
}