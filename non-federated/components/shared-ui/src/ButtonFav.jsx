import { IoHeartOutline, IoHeart} from 'react-icons/io5'
import { useState, useEffect } from 'react'
import { addCharacterToFav } from 'nf-ecomm-api'

const ButtonFav = ( { context, character={}, className='btn primary' } ) => {
    
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

    return (
        <button
            className={className}
            onClick={ handleOnClick }
        >
        {isFav ? 
            <IoHeartOutline className="mr" /> : 
            <IoHeart className="mr" />
        }
        </button>
    )
}

export default ButtonFav
