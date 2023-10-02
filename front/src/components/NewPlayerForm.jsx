import { Context } from "../context/football_app_context"

import { useContext, useState } from "react"

const NewPlayerForm = () => {
    const {footballData, setFootballData} = useContext(Context)
    const [player, setPlayer] = useState({name : null, age : null, isStarterPlayer : null, playerPosition : null})
    const [teamName, setTeamName] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null)


    const createPlayer = (e) => {
        e.preventDefault()

        if(!player?.age){
            setErrorMessage("Le joueur est trop vieux")
            return 
        }
        const teamToUpdate = footballData.find(team => team.name === teamName)
        const nonStarterPlayerCount = teamToUpdate.players.reduce((acc, value) => value.isStarterPlayer === false ? acc = acc +1 : acc, 0)

        if(nonStarterPlayerCount >= 2 && !player.isStarterPlayer){
            setErrorMessage("Il y a déjà deux remplaçant")
            return 
        }

        if(teamToUpdate.players.length >=7){
            setErrorMessage("L'équipe est complète")
            return 
        }

        teamToUpdate.players.push(player)

        const allUpdatedTeams = footballData.filter(team => team.name !== teamName)
        allUpdatedTeams.push(teamToUpdate)
        setFootballData(allUpdatedTeams)
    }

    return (
        <section>
            <h2>Créer un nouveau joueur</h2>
            <form className="newPlayerForm">
                <label>
                    Nom du joueur
                </label>
                <input type="text" value={player.name} onChange={(e) => setPlayer({
                    ...player, 
                    name : e.target.value})} required/>
                <label>Age</label>
                <input type="number" value={player.age} required onChange={(e) =>setPlayer(
                    {...player, 
                    age : e.target.value > 40 ? null : parseFloat(e.target.value) }
                    )
}/>
                {player.age > 40 && <p>Le joueur est trop agé, il ne peut avoir plus de 40 ans.</p>}
                <label>Équipe</label>
                <select onChange={(e) => setTeamName(e.target.value)}>
                    <option>-- Sélectionner une équipe</option>
                    {footballData.map(team => {return <option value={team.name}>{team.name}</option>})}
                </select>
                <label>Poste</label>
                <select onChange={(e) => setPlayer({...player, 
                    playerPosition : e.target.value})}>
                    <option value="attacker">Attaquant</option>
                    <option value="defender">Défenseur</option>
                    <option value="goal">Gardien</option>
                </select>
                <label>Le joueur est titulaire</label>
                <select onChange={(e) => setPlayer({...player, 
                    isStarterPlayer : e.target.value === "true" ? true : false})}>
                    <option value="true" default>Oui</option>
                    <option value="false">Non</option>
                </select>
                <button onClick={createPlayer}>Créer le joueur</button>
                {errorMessage && <p className="error">{errorMessage}</p>}
            </form>
        </section>
    )
}

export default NewPlayerForm