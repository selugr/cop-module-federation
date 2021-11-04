import CharacterDetails from './CharacterDetails'

export default [
    {
        path: '/characters/:characterId',
        Component: CharacterDetails
    },
    {
        path: '*',
        Component: ()=><center>404</center>
    },
]
