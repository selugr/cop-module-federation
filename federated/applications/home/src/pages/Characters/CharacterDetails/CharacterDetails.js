import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getCharacterById, addCharacterToFav, getFavs } from 'nf-ecomm-api'
import { GLOBALACTIONS, useGlobalContext, useGlobalUpdateContext } from 'nf-ecomm-frame'
import { Loader, ButtonFav } from 'nf-ecomm-shared-ui'
import './CharacterDetails.css'
import 'nf-ecomm-shared-ui/dist/main.css'

const CharacterDetails = () => {
    const [available, setAvailable] = useState( true )
    const [isFavorite, setIsFavorite] = useState(false)
    const [character, setCharacter] = useState()
    const { characterId } = useParams()
    const { characterFavs } = useGlobalContext([])
    const globalUpdateContext = useGlobalUpdateContext()

    const handleOnClick = async ()=>{
        globalUpdateContext( {
            type: GLOBALACTIONS.SET_CHARACTER_FAVS,
            payload: {
                characterFavs: await addCharacterToFav(character)
            }
        } )
    }

    useEffect( () => {
        ( async () => {
            if ( characterId ) {
                const characterRes = await getCharacterById( characterId )
                
                if ( !characterRes ) {
                    setAvailable( false )
                    return
                }
                
                setCharacter(characterRes)
            }
        } )()
    }, [characterId] )
    
    useEffect(()=>{
        if (character) {
            setIsFavorite(!!characterFavs.find(c => c.id === character.id))
        }
    }, [characterFavs, character])

    if ( !character || character.id != characterId ) {
        return (
            <div className="loader-container">
                {available ? <Loader/> : <h1 className="text-title">This character didn't ever exist in any possible reality</h1>}
            </div>
        )
    }    

    return (
        <div className="character-container">
            <div className="character-grid">
                <div className="picture">
                    <img src={ character.image } alt={ character.name } />
                </div>
                <div className="info">
                    <section>
                        <h1 className="text-title">{character.name}</h1>
                    </section>
                    <section className="specs">
                        <h2>SPECIES:</h2>
                        <p>{character.species}</p>
                        <h2>STATUS:</h2>
                        <p>{character.status}</p>
                        <h2>GENDER:</h2>
                        <p>{character.gender}</p>
                        <h2>ORIGIN:</h2>
                        <p>{character.origin.name}</p>
                        <h2>LOCATION:</h2>
                        <p>{character.location.name}</p>
                    </section>
                    <ButtonFav 
                        onClick={handleOnClick}
                        character={character}
                        active={isFavorite}
                    />
                </div>
            </div>
        </div>
    )
}

export default CharacterDetails
