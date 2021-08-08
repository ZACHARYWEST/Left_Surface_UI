import {useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

function SignIn(){


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
            //history.push should become user profile page
            history.push('/dashboard')
        })
        .catch(Error => {
            console.log("replace this with route to error page")
        });
    }



    return(
        <div className="sign-up-container container">
            <form className="row g-3">
                <h2 className="signup-h2-banner">Sign In</h2>
                    <div className="col-md-6">
                        <div className="col-md-6">
                            <label for="inputemail" className="form-label">E-mail</label>
                            <input onChange={changeHandler} value={signInUser.email} name="email"   placeholder="E-Mail"/>
                        </div>
                        <div className="col-md-6">
                            <label for="inputpassword" className="form-label">Password</label>
                            <input onChange={changeHandler} value={signInUser.password} name="password" type="password" placeholder="**********"/>
                        </div>
                    <div className="d-grid gap-2 ">
                        <button onClick={signInSubmitHandler} className="bg-dark btn btn-outline-success" type="button">Sign In</button>
                    </div>
                    </div>
            </form>
        </div>

    )
}

export default SignIn;