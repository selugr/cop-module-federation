import { NavLink } from 'react-router-dom'
import { IoPhonePortraitOutline } from 'react-icons/io5'
import './Logo.css'
import logo from '../../../res/img/logo.png'
import title from '../../../res/img/title.png'

const Logo = () => {
    return (
        <div className="header-brand">
            <NavLink exact to="/" >
                <img src={logo} alt="logo" className="logo"/>
                <img src={title} alt="Rick and Morty" className="title"/>
                <h1 className="text-title ml sm">The</h1><h1 className="text-title ml">Multiverse</h1>
            </NavLink>
        </div>
    )
}

export default Logo
