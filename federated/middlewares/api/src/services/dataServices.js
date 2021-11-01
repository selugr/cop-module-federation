import fetchService from './fetchService'
import localStorageService from './localStorageService'

export default {
    getCharacters: fetchService.getCharacters,
    getCharacterById: fetchService.getCharacterById,
    saveToLocalStorage: localStorageService.saveToLocalStorage,
    loadFromLocalStorage: localStorageService.loadFromLocalStorage
}
