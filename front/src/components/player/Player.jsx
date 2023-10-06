import { PlayerEdit } from './PlayerEdit'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import footballRepo from '../../repositories/football.repo'
import { DELETE_PLAYER } from '../../store/reducers/football_data_reducer'


export function Player({playerData, team_index, playerIndex}) {
    const [isEditingPlayer, setEditingPlayer] = useState(false)
    const footballData = useSelector(state => state.footballData)
    const dispatch = useDispatch()
    
    const handleDelete = (e) => {
        e.preventDefault()
        const result = footballRepo.deletePlayer(footballData, playerData.id, team_index)
        dispatch(DELETE_PLAYER(result.data))
    }
    return(
        <div>
            <div className='player-header'>
                <Link to={`/player-notice/${playerData.id}`}> {playerData?.name}</Link>
                <button className="icon-button" onClick={handleDelete}>
                    <i className="fa-solid fa-trash"></i>
                </button>
                <button className="icon-button"  onClick={() => setEditingPlayer(!isEditingPlayer)}>
                    <i className="fa-regular fa-pen-to-square"></i>
                </button>
            </div>
            {isEditingPlayer && 
                <PlayerEdit teamIndex={team_index} playerIndex={playerIndex}></PlayerEdit>
            }
        </div>
    )
}