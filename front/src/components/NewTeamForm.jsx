import { useState } from "react"

const NewTeamForm = () => {
    const [teamName, setTeamName] = useState(null)
    const [teamJerseyColor, setTeamJerseyColor] = useState("#ffffff")

    return (
        <>
            <h2>Créer une nouvelle équipe</h2>
            <form>
                <label>Nom de l'équipe</label>
                <input type="text" value={teamName} onChange={(e) => setTeamName(e.target.value)}/>
                <label>Couleur du maillot</label>
                <input value={teamJerseyColor} type="color" onChange={(e) => setTeamJerseyColor(e.target.value)}/>
            </form>
        </>
    
    )
}

export default NewTeamForm