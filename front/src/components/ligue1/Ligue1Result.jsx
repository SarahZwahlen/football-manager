import { useState, useEffect } from "react"

import { MatchView } from './MatchView'

export function Ligue1Result () {
  const [fixtures, setFixtures] = useState([])
  const setData = async () => {
    fetch(`https://livescore-api.com/api-client/fixtures/matches.json?key=${process.env.REACT_APP_KEY}&secret=${process.env.REACT_APP_SECRETKEY}&competition_id=5`)
      .then(res => res.json())
      .then(data => setFixtures(data.data.fixtures))
      .catch(error => console.log(error))
  }

  useEffect(() => {
    setData()
  }, [])

  return(
    <main>
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
          {fixtures.map((match) => <MatchView match_data={match}/>)}
        </tbody>
      </table>
    </main>
  )
}