import Favs from './Favs/Favs'
import Logo from './Logo/Logo'
import './Header.css'

const Header = () => {
    return (
        <header>
            <div className="header-main">
                <Logo />
                <Favs />
            </div>
        </header>
    )
}

export default Header
