import { useState, useContext } from "react"
import { Context } from "../../context/football_app_context"
import { useNavigate } from "react-router-dom"

import { useSelector, useDispatch } from "react-redux"
import { ADD_TEAM, DELETE_TEAM } from "../../store/reducers/football_data_reducer"


const NewTeamForm = () => {
    //const football = useSelector((state) => state.footballData)
    const dispatch = useDispatch()

    const {footballData, setFootballData} = useContext(Context)
    const [newTeam, setNewTeam] = useState({
        name: '',
        jerseyColor: '#000000',
        players: []
    })
    const [errors, setErrors] = useState(null)

    const navigate = useNavigate()

    const handleNewTeam = (e) => {
        e.preventDefault()
        const isAlreadyTeam = footballData.find(team => team.name.toLowerCase() === newTeam.name.toLocaleLowerCase())
        if (isAlreadyTeam) {
            setErrors("Le nom de l'équipe est déjà pris.")
        }
        else {
            const localStorageTeams = localStorage.getItem("footballTeams") ? JSON.parse(localStorage.getItem("footballTeams")) : []
            localStorage.setItem("footballTeams", JSON.stringify([
                ...localStorageTeams,
                 newTeam
             ]))
            dispatch(ADD_TEAM(newTeam))
            navigate("/team-list")
        }
    }

    return (
        <main>  
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
                <button className="main-button" onClick={handleNewTeam}>Créer l'équipe</button>
            </form>
            {errors && <div>{errors}</div>}
        </main>
    
    )
}

export default NewTeamForm