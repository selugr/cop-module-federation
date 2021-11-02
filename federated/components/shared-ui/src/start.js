import React from 'react';
import ReactDOM from 'react-dom'
import { GlobalProvider, GLOBALACTIONS, useGlobalContext, useGlobalUpdateContext } from 'nf-ecomm-frame'
import {ButtonFav, Loader} from "./index";

ReactDOM.render(
    <React.StrictMode>
        <GlobalProvider>
            <Loader />
            <ButtonFav 
                    context={
                        {
                            GLOBALACTIONS, 
                            useGlobalContext, 
                            useGlobalUpdateContext 
                        }
                    } 
                    character={{
                        "id": "ZmGrkLRPXOTpxsU4jjAcv",
                        "brand": "Acer",
                        "model": "Iconia Talk S",
                        "price": "170",
                        "imgUrl": "https://front-test-api.herokuapp.com/images/ZmGrkLRPXOTpxsU4jjAcv.jpg"
                    }}
                />
        </GlobalProvider>
    </React.StrictMode>,
    document.getElementById( 'root' )
)
