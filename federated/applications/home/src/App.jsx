import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import Header from './components/Header/Header'
import { GlobalProvider } from 'nf-ecomm-frame'
import './App.css'

const App = ({routes}) => {
    return (
        <GlobalProvider>
            <Router>
                <Header/>
                <main>
                    <Switch>
                        {routes.map( ( { path, Component }, key ) =>
                            <Route exact path={ path } key={ key }>
                                <Component/>
                            </Route>
                        )}
                    </Switch>
                </main>
            </Router>
        </GlobalProvider>
    )
}

export default App
