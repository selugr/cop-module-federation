import { render, screen, waitFor } from '@testing-library/react'
import Favs from './Favs'
import { GlobalProvider } from '../../GlobalContext'

test( 'renders cart counter', async () => {
    render(
        <GlobalProvider>
            <Favs/>
        </GlobalProvider>
    )
    const counter = screen.getByText( /^\d+$/i )
    await waitFor( () => {
        expect( counter ).toBeInTheDocument()
    } )
} )
