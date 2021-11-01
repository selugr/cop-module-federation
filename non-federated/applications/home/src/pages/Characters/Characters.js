import { useEffect, useState } from 'react'
import Loader from '../../components/Loader/Loader'
import Search from '../../components/Search/Search'
import Card from '../../components/Card/Card'
import { getCharacters } from 'nf-ecomm-api'
import './Characters.css'

const Characters = () => {
    const [characters, setCharacters] = useState([])

    const [filters, setFilters] = useState( [] )
    const [filteredCharacters, setFilteredCharacters] = useState( [] )

    useEffect( () => {
        ( async () => {
            setCharacters(await getCharacters())
        } )()
    }, [] )

    useEffect( () => {
        if(characters){
            setFilteredCharacters(
                characters.filter( p => filters.length ? isOnFilter( p ) : true )
                    .map( c => <li key={ c.id }><Card character={ c }/></li> )
            )
        }
    }, [characters, filters] )

    const handleFilter = ( filter ) => {
        setFilters( filter
            .toLowerCase()
            .split( /[ ,]+/ )
            .filter( f => f !== '' ) )
    }

    const isOnFilter = ( character ) => {
        const result = Object.values( filters ).every( f => {
            return f ? character.name.toLowerCase().includes( f.trim() ) || character.species.toLowerCase().includes( f.trim() ) : false
        } )
        return result
    }

    if ( !characters || !characters.length || ( !filteredCharacters.length && !filters.length ) ) {
        return (
            <div className="loader-container">
                <Loader/>
            </div>
        )
    }

    return (
        <div id="product-list">
            <Search handleFilter={ handleFilter } />
            {filteredCharacters.length > 0
                ? <ul className="list-container">
                    {filteredCharacters}
                </ul>
                : <div className="loader-container">
                    <h1>There's no characters with such name in the whole multiverse!</h1>
                </div>
            }
        </div>
    )
}

export default Characters
