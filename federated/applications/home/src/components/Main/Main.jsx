import { NavLink } from 'react-router-dom'
import cover from '../../res/img/cover.jpg'
import './Main.css'

const Main = ()=> {
    return (
        <div className="main-container">
            <section className="main-header">
                <img src={cover} alt="Rick and morty cover poster" />
            </section>
            <section className="main-content">
                <NavLink className="link" to="/characters">Explore the characters now!</NavLink>
            </section>
        </div>
    )
}

export default Main