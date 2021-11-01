import { createContext, useContext, useReducer } from 'react'

export const GLOBALACTIONS = {
    SET_CHARACTER_FAVS: 'setCharacterFavs'
}

const useGlobal = () => {
    const initialState = {
        characterFavs: []
    }

    return useReducer( ( state, action ) => {
        switch ( action.type ) {
        case GLOBALACTIONS.SET_CHARACTER_FAVS:
            return {
                characterFavs: action.payload.characterFavs
            }
        default:
            return state
        }
    }, initialState )
}

const GlobalContext = createContext()
const GlobalUpdateContext = createContext()

export const useGlobalContext = () => {
    return useContext( GlobalContext )
}

export const useGlobalUpdateContext = () => {
    return useContext( GlobalUpdateContext )
}

export const GlobalProvider = ( { children } ) => {
    const [state, dispatch] = useGlobal()

    return (
        <GlobalContext.Provider value={ state }>
            <GlobalUpdateContext.Provider value={ dispatch }>
                {children}
            </GlobalUpdateContext.Provider>
        </GlobalContext.Provider>
    )
}
