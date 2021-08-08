import {useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

function SignUp(){

    const [signUpUser, setSignUpUser] = useState(
        {fName:'',
        lName:'',
        email:'',
        city:'',
        state:'',
        adci:'',
        password:''
        }
    )

    const history = useHistory();

    const signUpChangeHandler = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        const tempSignUp = {...signUpUser};
        tempSignUp[name] = value;
        setSignUpUser(tempSignUp);
    }

    const signUpSubmitHandler = () =>{
        axios.post('http://localhost:8080/saveUser', signUpUser).then(Response =>{
            history.push('/thank-you');
        }).catch(error =>{
            console.log("in future add an error page")
        });
    }

    return(
        <div className="sign-up-container container">
        <form className="row g-3">
            <h2 className="signup-h2-banner"> Sign up below</h2>
            <div className="col-md-6">
                <label for="inputfName" className="form-label">First Name</label>
                <input onChange={signUpChangeHandler} value={signUpUser.fName} name="fName" type="text" className="form-control" id="inputfName" placeholder="Buster" />
            </div>
            <div className="col-md-6">
                <label for="inputlName" className="form-label">Last Name</label>
                <input onChange={signUpChangeHandler} value={signUpUser.lName} name="lName" type="text" className="form-control" id="inputlName" placeholder="Lung"/>
            </div>

            <div className="col-md-6">
                <label for="inputemail" className="form-label">Email</label>
                <input onChange={signUpChangeHandler} value={signUpUser.email} name="email" type="email" className="form-control" id="inputemail" placeholder="buster.lung@bubbles.com"/>
            </div>
            <div className="col-md-4">
                    <label for="inputadci" className="form-label">ADCI</label>
                    <select onChange={signUpChangeHandler} id="inputadci" name="adci" value={signUpUser.ADCI} className="form-select">
                    <option selected>Choose</option>
                    <option>Entry-Level Diver/Tender</option>
                    <option>Air Diver</option>
                    <option>Mixed-Gas Diver</option>
                    <option>Bell/Saturation Diver</option>
                    <option>Air-Diving Supervisor</option>
                    <option>Mixed-Gas Diving Supervisor</option>
                    <option>Bell/Saturation Diving Supervisor</option>
                    <option>Life-Support Technician</option>
                    <option>Saturation Technician</option>
                    </select>
            </div>

            <div className="col-md-6">
                <label for="inputcity" className="form-label">City</label>
                <input onChange={signUpChangeHandler} value={signUpUser.city} name="city" type="text" className="form-control" id="inputcity" placeholder="Atlantis" />
            </div>
            <div className="col-md-4">
                    <label for="inputstate" className="form-label">State</label>
                    <select onChange={signUpChangeHandler} id="inputstate" name="state" value={signUpUser.state} className="form-select">
                    <option selected>Choose</option>
                    <option>AL</option><option>AK</option><option>AR</option><option>AZ</option><option>CA</option>
                    <option>CO</option><option>CT</option><option>DE</option><option>FL</option><option>GA</option>
                    <option>HI</option><option>ID</option><option>IL</option><option>IN</option><option>IA</option>
                    <option>KS</option><option>KY</option><option>LA</option><option>ME</option><option>MD</option>
                    <option>MA</option><option>MI</option><option>MN</option><option>MS</option><option>MO</option>
                    <option>MT</option><option>NE</option><option>NV</option><option>NH</option><option>NJ</option>
                    <option>NM</option><option>NC</option><option>ND</option><option>NY</option><option>OH</option>
                    <option>OK</option><option>OR</option><option>PA</option><option>RI</option><option>SC</option>
                    <option>SD</option><option>TN</option><option>TX</option><option>UT</option><option>VT</option>
                    <option>VA</option><option>WA</option><option>WV</option><option>WI</option><option>WY</option>
                    </select>
            </div>
            <div className="col-md-6">
                <label for="inputpassword" className="form-label">Password</label>
                <input onChange={signUpChangeHandler} value={signUpUser.password} name="password" type="password" className="form-control" id="inputpassword" placeholder="**********"/>
            </div>

                <div className="d-grid gap-2 ">
                <button onClick={signUpSubmitHandler} className="bg-dark btn btn-outline-success" type="button">Sign up</button>
            </div>
        </form>
        </div>

    )
}

export default SignUp;