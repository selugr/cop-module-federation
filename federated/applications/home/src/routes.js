import Characters from 'itemsList/Characters'
import CharacterDetails from 'itemDetails/CharacterDetails'
import Main from './components/Main/Main'
import ErrorRoute from './components/ErrorRoute/ErrorRoute'

export default [
    {
        path: '/characters/:characterId',
        Component: CharacterDetails
    },
    {
        path: '/characters',
        Component: Characters
    },
    {
        path: '/',
        Component: Main
    },
    {
        path: '*',
        Component: ErrorRoute
    },
]
