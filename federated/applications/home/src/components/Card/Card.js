import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import portal from '../../res/img/logo.png'
import { ButtonFav } from 'nf-ecomm-shared-ui'
import { addCharacterToFav, getFavs } from 'nf-ecomm-api'
import { GLOBALACTIONS, useGlobalContext, useGlobalUpdateContext } from 'nf-ecomm-frame'
import './Card.css'
import 'nf-ecomm-shared-ui/dist/main.css'

const Card = ( { character } ) => {
    const { characterFavs } = useGlobalContext([])
    const globalUpdateContext = useGlobalUpdateContext()
    const [isFavorite, setIsFavorite] = useState(false)

    const handleOnClick = async ()=>{
        globalUpdateContext( {
            type: GLOBALACTIONS.SET_CHARACTER_FAVS,
            payload: {
                characterFavs: await addCharacterToFav(character)
            }
        } )
    }

    useEffect(()=>{
        const currentFavs = getFavs()
        setIsFavorite(!!currentFavs.find(c => c.id === character.id))
    }, [])

    useEffect(()=>{
        setIsFavorite(!!characterFavs.find(c => c.id === character.id))
    }, [characterFavs])

    return (
        <article className="card-container">
            <ButtonFav 
                onClick={handleOnClick}
                active={isFavorite}
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
