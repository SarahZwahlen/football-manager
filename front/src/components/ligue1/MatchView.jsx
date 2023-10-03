

export function MatchView ({match_data}) {
    return(
        <tr className="match">
            <td>
                <div className="competition-round">{match_data?.round}</div>
            </td>
            <td>
                <div>
                    <h3> <span className="hosting">{match_data?.home_name}</span> - {match_data?.away_name}</h3>
                </div>
            </td>
            <td>
                <div>
                    <p>{match_data?.location}</p>
                </div>
            </td>
            <td>
                <div>
                    <p>{match_data?.date.split('-').reverse().join('/')} - {match_data?.time.slice(0, 5)}</p>
                </div>
            </td>
        </tr>
    )
}