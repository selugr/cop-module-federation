import { IoHeartOutline, IoHeart} from 'react-icons/io5'
import './ButtonFav.css'

const ButtonFav = ({ 
    onClick: handleClick,
    className='fav-button',
    active
}) => {
    return (
        <button
            className={className}
            onClick={ handleClick }
        >
        {active ? 
            <IoHeart/> : 
            <IoHeartOutline/>
        }
        </button>
    )
}

export default ButtonFav
