import { render, screen } from '@testing-library/react'
import ButtonFav from './ButtonFav'

test( 'renders price', () => {
    const price = 250
    render( <ButtonFav price={ price }/> )
    const element = screen.getByText( /\d+/i )
    expect( element ).toBeInTheDocument()
} )
