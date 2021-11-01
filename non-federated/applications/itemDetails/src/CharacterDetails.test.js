import { render, screen } from '@testing-library/react'
import CharacterDetails from './CharacterDetails'
import { BrowserRouter as Router } from 'react-router-dom'
import { GlobalProvider } from '../../../components/GlobalContext'

test( 'renders details page', () => {
    render(
        <GlobalProvider>
            <Router>
                <CharacterDetails/>
            </Router>
        </GlobalProvider>
    )
    setTimeout( () => {
        const element = screen.getByText( /PRICE/i )
        expect( element ).toBeInTheDocument()
    }, 2000 )
} )
