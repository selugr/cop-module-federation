import React from 'react'
import ReactDOM from 'react-dom'
import App from 'home/App'
import routes from './routes'

ReactDOM.render(
    <React.StrictMode>
        <App routes={routes}/>
    </React.StrictMode>,
    document.getElementById( 'root' )
)
