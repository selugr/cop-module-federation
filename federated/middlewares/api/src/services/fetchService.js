import global from '../apiConfig'

export default {
    getCharacters: async ( page = 1 ) => {
        const res = await fetch( global.rickandmortyAPI.url + global.rickandmortyAPI.endPoints.characters + `?page=${page}` )
        const data = await res.json()
        return data?.results || []
    },
    getCharacterById: async ( id ) => {
        const res = await fetch( global.rickandmortyAPI.url + global.rickandmortyAPI.endPoints.characters + id )
        return await res.json() || {}
    },
    getLocations: async ( page = 1 ) => {
        const res = await fetch( global.rickandmortyAPI.url + global.rickandmortyAPI.endPoints.locations + `?page=${page}` )
        const data = await res.json()
        return data?.results || []
    },
    getEpisodes: async ( page = 1 ) => {
        const res = await fetch( global.rickandmortyAPI.url + global.rickandmortyAPI.endPoints.episodes + `?page=${page}` )
        const data = await res.json()
        return data?.results || []
    }
}
