
import { useState, useEffect } from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';


function EditInfo(){

    const [editUser, setEditUser] = useState({});
    const [newAction, setNewAction] = useState(
        {
            activityId:'',
            userId: localStorage.getItem('loggedInUser'),
            actionTimeStamp:'',
            actionDescription:"Users Info updated."
        });

    useEffect(()=>{
        const params = {
            id: localStorage.getItem('loggedInUser')
        }
        axios.get('http://localhost:8080/findUserById', {params})
        .then(response =>{
            setEditUser(response.data);
        }).catch(error =>{
        });
    },[]
    );

    const history = useHistory();

    const editChangeHandler = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        const tempEdit = {...editUser};
        tempEdit[name] = value;
        setEditUser(tempEdit);
    }

    const editSubmitHandler = () =>{
        const tempAction = {...newAction};
        tempAction.actionDescription = "Users Info updated.";
        setNewAction(tempAction);
        axios.post('http://localhost:8080/saveActivity', newAction);
        axios.post('http://localhost:8080/editUser', editUser)
        .then(Response =>{
            history.push('/profile');
        }).catch(error =>{
            console.log("in future add an error page")
        });
    }

    return(
        <div className="sign-up-container container">
        <form className="row g-3">
            <h2 className="signup-h2-banner">Edit your information</h2>
            <div className="col-md-6">
                <label for="inputfName" className="form-label">First Name</label>
                <input onChange={editChangeHandler} value={editUser.fName} name="fName" type="text" className="form-control" id="inputfName" placeholder={editUser.fName} />
            </div>
            <div className="col-md-6">
                <label for="inputlName" className="form-label">Last Name</label>
                <input onChange={editChangeHandler} value={editUser.lName} name="lName" type="text" className="form-control" id="inputlName" placeholder={editUser.lName}/>
            </div>

            <div className="col-md-6">
                <label for="inputemail" className="form-label">Email</label>
                <input onChange={editChangeHandler} value={editUser.email} name="email" type="email" className="form-control" id="inputemail" placeholder={editUser.email}/>
            </div>
            <div className="col-md-4">
                    <label for="inputadci" className="form-label">ADCI</label>
                    <select onChange={editChangeHandler} id="inputadci" name="adci" value={editUser.ADCI} className="form-select">
                    <option selected>{editUser.adci}</option>
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
                <input onChange={editChangeHandler} value={editUser.city} name="city" type="text" className="form-control" id="inputcity" placeholder={editUser.city} />
            </div>
            <div className="col-md-4">
                    <label for="inputstate" className="form-label">State</label>
                    <select onChange={editChangeHandler} id="inputstate" name="state" value={editUser.state} className="form-select">
                    <option selected>{editUser.state}</option>
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
                <input onChange={editChangeHandler} value={editUser.password} name="password" type="password" className="form-control" id="inputpassword" placeholder="**********"/>
            </div>

                <div className="d-grid gap-2 ">
                <button onClick={editSubmitHandler} className="bg-dark btn btn-outline-success" type="button">Submit</button>
            </div>
        </form>
        </div>
    )
}

export default EditInfo;