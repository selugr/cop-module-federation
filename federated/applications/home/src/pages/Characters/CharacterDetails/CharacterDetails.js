import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getCharacterById } from 'nf-ecomm-api'
import { GLOBALACTIONS, useGlobalContext, useGlobalUpdateContext } from 'nf-ecomm-frame'
import { Loader, ButtonFav } from 'nf-ecomm-shared-ui'
import './CharacterDetails.css'

const CharacterDetails = () => {
    const [available, setAvailable] = useState( true )
    const { characterId } = useParams()

    const [character, setCharacter] = useState()

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
                        context={
                            {
                                GLOBALACTIONS, 
                                useGlobalContext, 
                                useGlobalUpdateContext 
                            }
                        } 
                        character={character}
                    />
                </div>
            </div>
        </div>
    )
}

export default CharacterDetails
