import { NavLink } from 'react-router-dom'
import portal from '../../res/img/logo.png'
import { ButtonFav } from 'nf-ecomm-shared-ui'
import { GLOBALACTIONS, useGlobalContext, useGlobalUpdateContext } from 'nf-ecomm-frame'
import './Card.css'

const Card = ( { character } ) => {
    return (
        <article className="card-container">
            <ButtonFav 
                context={
                    {
                        GLOBALACTIONS, 
                        useGlobalContext, 
                        useGlobalUpdateContext 
                    }
                } 
                character={character}
            />
            <NavLink className="item" to={ `/characters/${character.id}` } >
                <div className="picture">
                    <img className="frame" src={ portal } alt={ character.name } />
                    <div className="photo-container">
                        <img className="photo" src={ character.image } alt={ character.name } />
                    </div>
                </div>
                <div className="info">
                    <h2 className="text-title">{character.name}</h2>
                </div>
            </NavLink>
        </article>
    )
}

export default Card
