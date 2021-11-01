export default {
    productsAPI: {
        url: 'https://front-test-api.herokuapp.com/',
        endPoints: {
            getProducts: 'api/product',
            getProductById: 'api/product/',
            addProductToCart: 'api/cart'
        }
    },
    rickandmortyAPI: {
        url: 'https://rickandmortyapi.com/api/',
        endPoints: {
            characters: 'character/',
            locations: 'location/',
            episodes: 'episode/'
        }
    }
}
