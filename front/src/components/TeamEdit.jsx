import { Context } from "../context/football_app_context"
import { useContext, useState } from "react"

export function TeamEdit ({children, index}) {
    const {footballData, setFootballData } = useContext(Context)
    const [teamData, setTeamData] = useState(footballData[index])
    
    const handleEdit = (e) => {
        e.preventDefault()

        const localTeamData = JSON.parse(localStorage.getItem("footballTeams"))
        const localUpdatedTeamData = localTeamData.filter(team => team.name !== footballData[index].name)
        localStorage.setItem("footballTeams", JSON.stringify([...localUpdatedTeamData, teamData]))

        const editedData  = [...footballData]
        editedData.splice(index ,1, teamData)
        setFootballData(editedData)


    }
    return (
        <div>
            {children}
             <form className="small-form">
                <legend>Modifier l'équipe</legend>
                <div>
                    <label>Nom de l'équipe</label>
                    <input value={teamData?.name} onChange={(e) => setTeamData({
                        ...teamData,
                        name: e.target.value
                    })} />
                    <label>Couleur du maillot</label>
                    <input type="color" value={teamData?.jerseyColor} onChange={(e) => setTeamData({
                        ...teamData,
                        jerseyColor: e.target.value
                    })}/>
                    <button className="main-button" onClick={handleEdit}>Sauvegarder</button>
                </div>
             </form>
        </div>
    )
}