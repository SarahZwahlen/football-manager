

export function EditTeam ({children}) {
    return (
        <div>
            {children}
            <h3>Modifier votre équipe</h3>
            <label>Nom de l'équipe</label>
            <input type="text"/>
            <label>Couleur du maillot</label>
            <input></input>
        </div>
    )
}