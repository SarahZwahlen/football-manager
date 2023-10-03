import { useState, useEffect } from "react"
import { MatchView } from './MatchView'

export function Ligue1Result () {
    const [fixtures, setFixtures] = useState([])
    const setData = async () => {
        try {
            fetch('https://livescore-api.com/api-client/fixtures/matches.json?key=m1Wux6wQsBgfvzOo&secret=A3vhnJDUXk2dMbe8caDKhaAJLQZhqOF1&competition_id=5')
                .then(res => res.json())
                .then(data => setFixtures(data.data.fixtures))
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        setData()
    }, [])
    return(
        <section>
            <h2>Ligue 1</h2>
            <h3>Prochains Matchs</h3>
            <table className="match-list">
                <tbody>
                    <tr className="match-title">
                        <th>Journée</th>
                        <th>Équipes</th>
                        <th>Site</th>
                        <th>Heure du match</th>
                    </tr>
                   {fixtures.map((match,index) => 
                    <MatchView match_data={match}/>
                )}
                </tbody>
            </table>
        </section>
    )
}