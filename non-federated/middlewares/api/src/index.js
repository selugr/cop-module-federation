/** Note: I make use of console methods to make API and LocalStorage checking easier. */

import dataServices from './services/dataServices'

const KEYS = {
    CHARACTERS: 'characters',
    CHARACTER: 'character',
    CHARACTER_FAVS: 'characterFavs'
}

const getCharacters = async () => {
    let characters = dataServices.loadFromLocalStorage( KEYS.CHARACTERS ) || []
    if ( !characters.length ) {
        console.log( 'Calling API to fetch characters...' )
        try {
            characters = await dataServices.getCharacters()
        } catch ( error ) {
            console.error( 'API error when fetching characters.', error )
            return null
        }
        dataServices.saveToLocalStorage( KEYS.CHARACTERS, characters )
    }
    return characters
}

const getCharacterById = async ( id ) => {
    let character = dataServices.loadFromLocalStorage( KEYS.CHARACTER )
    if ( !character || character.id !== id ) {
        console.log( 'Calling API to fetch character by id...' )
        try {
            character = await dataServices.getCharacterById( id )
        } catch ( error ) {
            console.error( 'API error when fetching character by id.', error )
            return null
        }
        dataServices.saveToLocalStorage( KEYS.CHARACTER, character )
    }
    return character
}

const addCharacterToFav = async ( character ) => {
    if ( !character ) {
        return null
    }
    let characterFavs = dataServices.loadFromLocalStorage( KEYS.CHARACTER_FAVS ) || []
    if ( !characterFavs.find( c => c.id === character.id ) ) {
        characterFavs.push( character )
    } else {
        characterFavs = characterFavs.filter( c => c.id !== character.id )
    }
    dataServices.saveToLocalStorage( KEYS.CHARACTER_FAVS, characterFavs )
    return characterFavs
}

const getFavs = () => {
    return dataServices.loadFromLocalStorage( KEYS.CHARACTER_FAVS ) || []
}

export {
    getCharacters,
    getCharacterById,
    addCharacterToFav,
    getFavs
}
