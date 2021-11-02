import { useEffect, useState, Suspense, lazy } from 'react'
import { useParams } from 'react-router-dom'
import { getCharacterById, addCharacterToFav } from 'nf-ecomm-api'
import { GLOBALACTIONS, useGlobalContext, useGlobalUpdateContext } from 'nf-ecomm-frame'
import './CharacterDetails.css'

const Loader = lazy(() => import("sharedUi/Loader"));
const ButtonFav = lazy(() => import("sharedUi/ButtonFav"));

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
                {available 
                ? <Suspense fallback={"loading..."}>
                    <Loader />
                </Suspense>
                : <h1 className="text-title">This character didn't ever exist in any possible reality</h1>}
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
                    <Suspense fallback={"<3"}>
                        <ButtonFav 
                            onClick={handleOnClick}
                            character={character}
                            active={isFavorite}
                        />
                    </Suspense>
                </div>
            </div>
        </div>
    )
}

export default CharacterDetails
