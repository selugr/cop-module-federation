import axiosService from './axiosService'
import fetchService from './fetchService'
import localStorageService from './localStorageService'

export default {
    getCharacters: fetchService.getCharacters,
    getCharacterById: fetchService.getCharacterById,
    addProductToCart: axiosService.addProductToCart,
    getProducts: axiosService.getProducts,
    getProductById: axiosService.getProductById,
    saveToLocalStorage: localStorageService.saveToLocalStorage,
    loadFromLocalStorage: localStorageService.loadFromLocalStorage
}
