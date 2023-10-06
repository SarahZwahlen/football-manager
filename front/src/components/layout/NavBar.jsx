import { useContext } from "react";

import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { UserContext } from "../../context/userContext";

const NavBar = () => {
  const { currentUser } = useContext(UserContext);
  const location = useLocation();
  return (
    <>
      { (location.pathname !=='/login' && location.pathname !=='/new-user') && 
      <nav className="main-link-buttons">
        {(currentUser.isLogged && location.pathname !=='/login') && <Link to='/team-list' className="main-button main-link" >Voir les équipes</Link>}
        {(currentUser.isLogged && location.pathname !=='/login') && <Link to='/team-create' className="main-button main-link" >Créer une équipe</Link>}
        {(currentUser.isLogged && location.pathname !=='/login') && <Link to='/player-create' className="main-button main-link" >Créer un joueur</Link>}
        <Link to='/ligue_result' className="main-button main-link">Prochain matchs de Ligue 1</Link>
      </nav>}
    </>
  )
}

export default NavBar