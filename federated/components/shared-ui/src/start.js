import React from 'react';
import ReactDOM from 'react-dom'
import { ButtonFav, Loader } from "./index";

ReactDOM.render(
    <React.StrictMode>
            <Loader />
            <ButtonFav 
                onClick={()=>{}}
                className='fav-button'
                active
                />
    </React.StrictMode>,
    document.getElementById( 'root' )
)