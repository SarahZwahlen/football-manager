import { useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";


const NavBar = () => {
  const users = useSelector(state => state.users)
  const is_logged = users.current_user.hasOwnProperty('email')
  const location = useLocation();
  return (
    <>
      { (location.pathname !=='/login' && location.pathname !=='/new-user') && 
      <nav className="main-link-buttons">
        {(is_logged && location.pathname !=='/login') && <Link to='/team-list' className="main-button main-link" >Voir les équipes</Link>}
        {(is_logged && location.pathname !=='/login') && <Link to='/team-create' className="main-button main-link" >Créer une équipe</Link>}
        {(is_logged && location.pathname !=='/login') && <Link to='/player-create' className="main-button main-link" >Créer un joueur</Link>}
        <Link to='/ligue_result' className="main-button main-link">Prochain matchs de Ligue 1</Link>
      </nav>}
    </>
  )
}

export default NavBar