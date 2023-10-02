import { useState, useContext } from "react"
import { Context } from "../context/football_app_context"

const NewTeamForm = (props) => {
    const {footballData, setFootballData} = useContext(Context)
    const [newTeam, setNewTeam] = useState({
        name: null,
        jerseyColor: '#000000',
        players: []
    })
    const [errors, setErrors] = useState(null)

    const createTeam = (e) => {
        e.preventDefault()
        let newteamName = newTeam.name.toLowerCase()
        let isAlreadyTeam = footballData.find(team => team.name.toLowerCase() === newteamName)
        if (isAlreadyTeam){
            setErrors("This team is already present")
        }else {
            setErrors(null)
            setFootballData([
                ...footballData,
                newTeam
            ])
            props.showTeams()
        }
    }

    return (
        <section>  
            <h2>Créer une nouvelle équipe</h2>
            <form className="form">
                <label>Nom de l'équipe</label>
                <input type="text" value={newTeam.name} onChange={(e) => setNewTeam({
                    ...newTeam,
                    name: e.target.value
                })} />
                <label>Couleur du maillot</label>
                <input value={newTeam.jerseyColor} type="color" onChange={(e) => setNewTeam({
                    ...newTeam,
                    jerseyColor: e.target.value
                })}/>
                <button className="main-button" onClick={createTeam}>Créer l'équipe</button>
            </form>
            {errors && <div>{errors}</div>}
        </section>
    
    )
}

export default NewTeamForm