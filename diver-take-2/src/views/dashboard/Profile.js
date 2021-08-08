
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function Profile(){

    const [currentUser, setCurrentUser] = useState({});
    const [usersActivity, setUsersActivity] = useState([])

    useEffect(()=>{
        const params = {
            id: localStorage.getItem('loggedInUser')
        }
        axios.get('http://localhost:8080/findUserById', {params})
        .then(response =>{
            setCurrentUser(response.data);
            console.log("this is current user", response.data);
        }).catch(error =>{

        });

    },[]
    );

    useEffect(()=>{
        const params = {
            id: localStorage.getItem('loggedInUser')
        }
        axios.get('http://localhost:8080/findUsersActivities', {params})
        .then(response =>{
            setUsersActivity(response.data);
        }).catch(error =>{

        });
    },[]
    );

    return(
            <div>
                 <div>
                     <div>
                         <div className="col">
                             <div className="profile_card shadow-sm">
                                 <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                                     <div className="profile_card_body">
                                         <p className="card-text">Name: {currentUser.fName} {currentUser.lName}</p>
                                         <p className="card-text">ADCI: {currentUser.adci}</p>
                                         <p className="card-text">Area: {currentUser.city}, {currentUser.state}</p>
                                         <p className="card-text">Email: {currentUser.email}</p>
                                             <div className="d-flex justify-content-between align-items-center">
                                                 <div className="btn-group">
                                                     <button type="button" className="btn btn-sm btn-outline-secondary">
                                                         Profile Picture
                                                     </button>
                                                     <button type="button" className="btn btn-sm btn-outline-secondary">
                                                         <Link to="/edit-user">
                                                         Edit Info
                                                         </Link>
                                                     </button>
                                                 </div> 
                                             </div>
                                         </div>
                                     </div>
                                 </div>
                                 <div class="bd-example">
                                    <table class="table table-dark table-borderless">
                                        <thead>
                                            <tr>
                                                <th scope="col">Date/Time</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {usersActivity.map((el)=>{
                                                return(
                                                    <tr>
                                                        <th scope="row">{el.actionTimeStamp}</th>
                                                        <td>{el.actionDescription}</td>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                             </div>
                         </div>
                </div>
    )
}

export default Profile;