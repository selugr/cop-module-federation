import './ErrorRoute.css'
import cucumber from '../../res/img/cucumber.png'

const ErrorRoute = ()=>{
    return (
        <div className="loader-container">
            <div className="error-container">
                <h1 className="text-title">404</h1>
                <img src={cucumber} alt="Error 404" />
                <p>In theory everything exist at some moment and place in the whole multiverse...</p>
                <p>And that's precisly why this 404 is here!</p>
                <p>The fact of first consideration doesn't mean you'll always find what you're looking for</p>
            </div>
        </div>
    )
}

export default ErrorRoute