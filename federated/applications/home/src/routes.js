import Characters from './pages/Characters/Characters'
import CharacterDetails from './pages/Characters/CharacterDetails/CharacterDetails'

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
        path: '*',
        Component: Characters
    },
]
