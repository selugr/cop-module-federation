import React from 'react'
import Characters from 'itemsList/Characters'
// import CharacterDetails from 'itemDetails/CharacterDetails'
const CharacterDetails = React.lazy(()=>import('itemDetails/CharacterDetails'))

import Main from './components/Main/Main'
import ErrorRoute from './components/ErrorRoute/ErrorRoute'

const CharacterDetailsLazy = ()=><React.Suspense fallback="Loading...">
    <CharacterDetails/>
</React.Suspense>

export default [
    {
        path: '/characters/:characterId',
        // Component: CharacterDetails
        Component: CharacterDetailsLazy
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
