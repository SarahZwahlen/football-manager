import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { Link } from "react-router-dom";

const NavBar = () => {
        const { currentUser } = useContext(UserContext);
    return (
        <nav className="main-link-buttons">
            {true && <Link to='/team-list' className="main-button main-link" >Voir les équipes</Link>}
            {true && <Link to='/team-create' className="main-button main-link" >Créer une équipe</Link>}
            {true && <Link to='/player-create' className="main-button main-link" >Créer un joueur</Link>}
            <Link to='/ligue_result' className="main-button main-link">Prochain matchs de Ligue 1</Link>
        </nav>
    )
}

export default NavBar