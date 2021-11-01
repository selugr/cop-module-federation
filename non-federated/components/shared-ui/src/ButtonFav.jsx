import { IoHeartOutline, IoHeart} from 'react-icons/io5'
import { useState, useEffect } from 'react'
import { addCharacterToFav, getFavs } from 'nf-ecomm-api'
import './ButtonFav.css'

const ButtonFav = ( { context, character={}, className='fav-button' } ) => {
    
    const { GLOBALACTIONS, useGlobalContext, useGlobalUpdateContext } = context
    const { characterFavs } = useGlobalContext([])
    const globalUpdateContext = useGlobalUpdateContext()

    const [isFav, setIsFav] = useState()

    const handleOnClick = async ()=>{
            globalUpdateContext( {
                type: GLOBALACTIONS.SET_CHARACTER_FAVS,
                payload: {
                    characterFavs: await addCharacterToFav(character)
                }
            } )
    }

    useEffect(()=>{
        setIsFav(characterFavs.find(c => c.id === character.id))
    }, [characterFavs])

    useEffect(()=>{
        const currentFavs = getFavs()
        setIsFav(currentFavs.find(c => c.id === character.id))
    }, [])

    return (
        <button
            className={className}
            onClick={ handleOnClick }
        >
        {isFav ? 
            <IoHeart/> : 
            <IoHeartOutline/>
        }
        </button>
    )
}

export default ButtonFav
