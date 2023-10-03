import logo from "./../../assets/octo-cat.png"
import shrek from "./../../assets/Shrek_pic.webp"
import donkey from "./../../assets/DaDonkey.webp"

const Footer = () => {
    return (<footer>
        <p>Une app par </p>
        <div className="artists-credits">
            <a href="https://github.com/Pparg"><img  className="footer-pic" src={shrek} /></a>
            <ul>
                <li><a href="https://github.com/Pparg"><img className="git-hub-logo" src={logo}/> Pierre-Paul WEISS</a></li>
                <li><a href="https://github.com/SarahZwahlen"><img className="git-hub-logo" src={logo}/> Sarah ZWAHLEN</a></li>
            </ul>
            <a href="https://github.com/SarahZwahlen">
                <img className="footer-pic" src={donkey} />
            </a>
        </div>
    </footer>)
}

export default Footer