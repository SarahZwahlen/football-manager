import { Context } from "../../context/football_app_context"
import { useContext, useState } from "react"
import footballRepo from "../../repositories/football.repo"
import { useDispatch } from "react-redux"
import { EDIT_TEAM } from "../../store/reducers/football_data_reducer"

export function TeamEdit ({index, data, children}) {
    const {footballData, setFootballData } = useContext(Context)
    const [teamData, setTeamData] = useState(footballData[index])
    const [errors, setErrors] = useState(null)
    const dispatch = useDispatch()
    
    const handleEdit = (e) => {
        e.preventDefault()
        const result = footballRepo.editTeam(footballData, data )
        if (result.isError) {
            setErrors(result.message)
        } else {
            dispatch(EDIT_TEAM(result.data))
        }

        // const localTeamData = JSON.parse(localStorage.getItem("footballTeams"))
        // const localUpdatedTeamData = localTeamData.filter(team => team.name !== footballData[index].name)
        // localStorage.setItem("footballTeams", JSON.stringify([...localUpdatedTeamData, teamData]))

        // const editedData  = [...footballData]
        // editedData.splice(index ,1, teamData)
        // setFootballData(editedData)


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