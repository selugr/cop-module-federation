import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
// import App from './App'
// const App = React.lazy(()=> import('home/App'))
import App from 'home/App'
import routes from './routes'

ReactDOM.render(
    <React.StrictMode>
        {/* <Suspense fallback="Loading..."> */}
            <App routes={routes}/>
        {/* </Suspense> */}
    </React.StrictMode>,
    document.getElementById( 'root' )
)