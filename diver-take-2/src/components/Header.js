import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookDead } from "@fortawesome/free-solid-svg-icons";
import { faQuestionCircle } from "@fortawesome/free-regular-svg-icons";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";
import {useState} from 'react';
import logo from '../assets/images/divelogo.png';
import { Link, useHistory } from 'react-router-dom';
import axios from "axios";




function Header(){

    const [signInUser, setSignInUser] = useState({email:'', password: ''});

    const history = useHistory();

    const changeHandler = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        const tempSignIn = {...signInUser};
        tempSignIn[name] = value;
        setSignInUser(tempSignIn);
    }

    const signInSubmitHandler = (event) =>{
        axios.post('http://localhost:8080/userLogin', signInUser)
        .then(Response => {
            localStorage.setItem("loggedInUser", Response.data.id);
            history.push('/dashboard')
        })
        .catch(Error => {
            console.log("replace this with route to error page")
        });
    }

    const signOutSubmitHandler = () =>{
        localStorage.clear();
        history.push('/home');
    }

    const toggleHeaderDisplay = () =>{
        if(localStorage.getItem('loggedInUser')){
            return(
                <header className="header-background">
                    <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <Link to="/home" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                        <img src={logo} height={100} width={100} alt="" />
                        </Link>
        
                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><Link to="/dashboard" className="nav-link px-2 text-white"><FontAwesomeIcon icon={faBookDead} /> Manifold</Link></li>
                        <li><Link to="/about" className="nav-link text-white"><FontAwesomeIcon icon={faQuestionCircle} /> Job Scope</Link></li>
                        <a className="nav-link px-2 text-white" href="https://www.westechrigging.com/rigging-hardware-shackles-crosby-g-4075-replacement-shackle-pins.html"><FontAwesomeIcon icon={faExclamation} /> Just in case</a>
                        </ul>
                        <div className="text-end">
                            <form>
                                <button onClick={signOutSubmitHandler} type="button" className="btn btn-warning">Sign Out</button>
                            </form>
                        </div>
                        
                    </div>
                    </div>
                </header> 
            ) 
        } else {
            return(
                <header className="header-background">
                <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <Link to="/home" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                    <img src={logo} height={100} width={100} alt="" />
                    </Link>
    
                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    <li><Link to="/dashboard" className="nav-link px-2 text-white"><FontAwesomeIcon icon={faBookDead} /> Manifold</Link></li>
                    <li><Link to="/about" className="nav-link text-white"><FontAwesomeIcon icon={faQuestionCircle} /> Job Scope</Link></li>
                    <a className="nav-link px-2 text-white" href="https://www.westechrigging.com/rigging-hardware-shackles-crosby-g-4075-replacement-shackle-pins.html"><FontAwesomeIcon icon={faExclamation} /> Just in case</a>
                    </ul>
    
                    <div className="text-end">
                    <form>
                        <input onChange={changeHandler} name="email" value={signInUser.email} placeholder="E-Mail" />
                        <input onChange={changeHandler} name="password" type="password" value={signInUser.password} placeholder="**********" />
                        <button onClick={signInSubmitHandler} type="button" className="btn btn-light text-dark me-2">Login</button>
                    </form>
                    </div>
                    <div className="text-end">
                        <Link className="nav-link" to="/sign-up">
                        <button type="button" className="btn btn-warning">Sign-up</button>
                        </Link>
                    </div>
                </div>
                </div>
            </header>       
            )
        }
    }

    return(
        <div className="mb-5">
            {toggleHeaderDisplay()}
        </div>
    )
}

export default Header;