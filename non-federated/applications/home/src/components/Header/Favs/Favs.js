import { useEffect } from 'react'
import { IoHeartOutline } from 'react-icons/io5'
// import { GLOBALACTIONS, useGlobalContext, useGlobalUpdateContext } from '../../GlobalContext'
// import { GLOBALACTIONS, useGlobalContext, useGlobalUpdateContext, GlobalProvider } from '../../GlobalContext'
import { GLOBALACTIONS, useGlobalContext, useGlobalUpdateContext } from 'nf-ecomm-frame'
import { getFavs } from 'nf-ecomm-api'
import './Favs.css'

const Favs = () => {
    const { characterFavs } = useGlobalContext()
    const globalUpdateContext = useGlobalUpdateContext()

    useEffect( () => {
        ( async () => {
            globalUpdateContext( {
                type: GLOBALACTIONS.SET_TOTAL,
                payload: {
                    characterFavs: await getFavs()
                }
            } )
        } )()
    }, [] )

    useEffect(()=>{
        console.log('FAVS', characterFavs)
    },[characterFavs])

    return (
        <button className="cart" onClick={ ( e ) => e.preventDefault() }>
            <IoHeartOutline className="icon" />
            <span className="counter">{characterFavs.length}</span>
        </button>
    )
}

export default Favs
