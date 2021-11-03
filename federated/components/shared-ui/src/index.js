import React, {Suspense} from 'react';
import ReactDOM from 'react-dom'
// import Loader from "sharedUi/Loader"
// import ButtonFav from "sharedUi/ButtonFav"

const ButtonFav = React.lazy(()=> import("sharedUi/ButtonFav"));
const Loader = React.lazy(()=> import("sharedUi/Loader"));

ReactDOM.render(
    <React.StrictMode>
        <Suspense fallback="loading..." >
            <Loader />
        </Suspense>
        <Suspense fallback="<3" >
            <ButtonFav 
                    onClick={()=>{}}
                    active
                    />
        </Suspense>
    </React.StrictMode>,
    document.getElementById( 'root' )
)


export { ButtonFav, Loader };
