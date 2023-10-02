import { Context } from "../context/football_app_context"
import { useContext, useState } from "react"

export function TeamEdit ({children, index}) {
    const {footballData, setFootballData } = useContext(Context)
    const [edit, setEdit] = useState(footballData[index])
    
    const handleEdit = (e) => {
        e.preventDefault()
        const editedData  = [...footballData]
        editedData.splice(index ,1, edit)
        setFootballData(editedData)
    }
    return (
        <div>
            {children}
             <form className="small-form">
                <legend>Modifier l'équipe</legend>
                <div>
                    <label>Nom de l'équipe</label>
                    <input value={edit?.name} onChange={(e) => setEdit({
                        ...edit,
                        name: e.target.value
                    })} />
                    <label>Couleur du maillot</label>
                    <input type="color" value={edit?.jerseyColor} onChange={(e) => setEdit({
                        ...edit,
                        jerseyColor: e.target.value
                    })}/>
                    <button className="main-button" onClick={handleEdit}>Sauvegarder</button>
                </div>
             </form>
        </div>
    )
}