import { Link } from "react-router-dom";




function Landing(){

    return(
        <body className="landing-background">
            
            <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">

                <h1>Left Surface</h1>
                <p className="lead">Sign up here to join Left Surface!</p>
                <p className="lead">
                <Link to="/sign-up" className="btn btn-lg btn-secondary fw-bold border-white bg-white">Register</Link>
                </p>
            
            </div>
            
        </body>
    )
}

export default Landing;