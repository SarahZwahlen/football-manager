import { useState, useContext } from "react"
import { Context } from "../context/football_app_context"

const NewTeamForm = () => {
    const {footballData, setFootballData} = useContext(Context)
    const [newTeam, setNewTeam] = useState({
        name: null,
        jerseyColor: '#000000',
        players: []
    })
    const [errors, setErrros] = useState(null)

    const createTeam = (e) => {
        e.preventDefault()
        let newteamName = newTeam.name.toLowerCase()
        let isAlreadyTeam = footballData.find(team => team.name.toLowerCase() === newteamName)
        if (isAlreadyTeam){
            setErrros("This team is already present")
        }else {
            setErrros(null)
            setFootballData([
                ...footballData,
                newTeam
            ])
        }
    }

    return (
        <>  
            <h2>Créer une nouvelle équipe</h2>
            <slot name=""></slot>
            <form>
                <label>Nom de l'équipe</label>
                <input type="text" value={newTeam.name} onChange={(e) => setNewTeam({
                    ...newTeam,
                    name: e.target.value
                })} />
                <label>Couleur du maillot</label>
                <input value={newTeam.jersey} type="color" onChange={(e) => setNewTeam({
                    ...newTeam,
                    jersey: e.target.value
                })}/>
                <button onClick={createTeam}>Créer l'équipe</button>
            </form>
            {errors && <div>{errors}</div>}
        </>
    
    )
}

export default NewTeamForm