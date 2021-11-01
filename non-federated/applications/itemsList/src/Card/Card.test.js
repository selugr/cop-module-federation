import { render, screen } from '@testing-library/react'
import Card from './Card'
import { BrowserRouter as Router } from 'react-router-dom'

test( 'renders item', () => {
    const product = {
        id: 'ZmGrkLRPXOTpxsU4jjAcv',
        brand: 'Acer',
        model: 'Iconia Talk S',
        price: '170',
        imgUrl: 'https://front-test-api.herokuapp.com/images/ZmGrkLRPXOTpxsU4jjAcv.jpg'
    }
    render(
        <Router>
            <Card product={ product }/>
        </Router>
    )
    const card = screen.getByText( product.model )
    expect( card ).toBeInTheDocument()
} )
