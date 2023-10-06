import { PlayerEdit } from './PlayerEdit'
import { useState, useContext } from 'react'
import { Context } from '../../context/football_app_context'
import { Link } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import footballRepo from '../../repositories/football.repo'
import { DELETE_PLAYER } from '../../store/reducers/football_data_reducer'


export function Player({playerData, teamIndex, playerIndex}) {
    const football = useSelector(state => state.footballData)
    const dispatch = useDispatch()
    const handleDelete = (e) => {
        e.preventDefault()
        const result = footballRepo.deletePlayer()
        dispatch(DELETE_PLAYER())
    }

    const {footballData, setFootballData} = useContext(Context)
    const [isEditingPlayer, setEditingPlayer] = useState(false)

    const deletePlayer = () => {
        const teamPlayers = footballData[teamIndex].players
        teamPlayers.splice(playerIndex,1)
        const updatedTeam = {
            ...footballData[teamIndex],
            players: teamPlayers
        }
        const updatedData = footballData.splice(teamIndex, 1, updatedTeam)

        localStorage.setItem("footballTeams", JSON.stringify(updatedData))

        setFootballData(updatedData)
    }
    
    return(
        <div>
            <div className='player-header'>
                <Link to={`/player-notice/${playerData.id}`}> {playerData?.name}</Link>
                <button className="icon-button" onClick={deletePlayer}>
                    <i className="fa-solid fa-trash"></i>
                </button>
                <button className="icon-button"  onClick={() => setEditingPlayer(!isEditingPlayer)}>
                    <i className="fa-regular fa-pen-to-square"></i>
                </button>
            </div>
            {isEditingPlayer && 
                <PlayerEdit teamIndex={teamIndex} playerIndex={playerIndex}></PlayerEdit>
            }
        </div>
    )
}