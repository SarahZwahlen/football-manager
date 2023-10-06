import { Context } from "../../context/football_app_context";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from 'uuid';

import footballRepo from "../../repositories/football.repo";

const NewPlayerForm = (props) => {
    const footballData = useSelector(state => state.footballData)
    const [player, setPlayer] = useState({name : null, age : 1, isStarterPlayer : true, playerPosition : "Attaquant", id : uuid()})
    const [teamName, setTeamName] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null)
    const navigate = useNavigate()
    const dispatch = useDispatch()


    const createPlayer = (e) => {
        e.preventDefault()

        
        // if(!player?.age){
        //     setErrorMessage("Le joueur est trop vieux")
        //     return 
        // }
        // const teamToUpdate = footballData.find(team => team.name === teamName)
        // if(!teamName){
        //     setErrorMessage("Aucune équipe n'a été choisie")
        //     return
        // }
        // const nonStarterPlayerCount = teamToUpdate.players.reduce((acc, value) => value.isStarterPlayer === false ? acc = acc +1 : acc, 0)

        // if(nonStarterPlayerCount >= 2 && !player.isStarterPlayer){
        //     setErrorMessage("Il y a déjà deux remplaçant")
        //     return 
        // }

        // if(teamToUpdate.players.length >=7){
        //     setErrorMessage("L'équipe est complète")
        //     return 
        // }

        // teamToUpdate.players.push(player)

        // const localTeamsData = JSON.parse(localStorage.getItem("footballTeams"))
        // const newLocalData = localTeamsData.filter(team => team.name !== teamName)
        // newLocalData.push(teamToUpdate)
        // localStorage.setItem("footballTeams", JSON.stringify(newLocalData))

        // const allUpdatedTeams = footballData.filter(team => team.name !== teamName)
        // allUpdatedTeams.push(teamToUpdate)

        const result = footballRepo.createPlayer(footballData, player, teamName)
        if(result.isError){
            setErrorMessage(result.message)
        } else {
            //Creer le reducer qui va bien
            
        }
        navigate("/team-list")
    }

    return (
        <main>
            <h2>Créer un nouveau joueur</h2>
            <form className="form">
                <label>
                    Nom du joueur
                </label>
                <input type="text" value={player.name} onChange={(e) => setPlayer({
                    ...player, 
                    name : e.target.value})} required/>
                <label>Age</label>
                <input type="number" value={player.age} min="1" required onChange={(e) =>setPlayer(
                    {...player, 
                    age : e.target.value > 40 ? null : parseFloat(e.target.value) }
                    )
}/>
                {!player.age && <p className="error">Le joueur est trop agé, il ne peut avoir plus de 40 ans.</p>}
                <label>Équipe</label>
                <select onChange={(e) => setTeamName(e.target.value)}>
                    <option>-- Sélectionner une équipe</option>
                    {footballData.map(team => {return <option value={team.name}>{team.name}</option>})}
                </select>
                <label>Poste</label>
                <select value={player.playerPosition} onChange={(e) => setPlayer({...player, 
                    playerPosition : e.target.value})}>
                    <option value="Attaquant">Attaquant</option>
                    <option value="Défenseur">Défenseur</option>
                    <option value="Gardien">Gardien</option>
                </select>
                <label>Le joueur est titulaire</label>
                <select value={player.isStarterPlayer} onChange={(e) => setPlayer({...player, 
                    isStarterPlayer : e.target.value === "true" ? true : false})}>
                    <option value="true" default>Oui</option>
                    <option value="false">Non</option>
                </select>
                <button  className="main-button" onClick={createPlayer}>Créer le joueur</button>
                {errorMessage && <p className="error">{errorMessage}</p>}
            </form>
        </main>
    )
}

export default NewPlayerForm