
import './sidebar.css';
// import {useState, useEffect} from 'react';
// import axios from 'axios';
import { Route, Link, useHistory } from 'react-router-dom';
import Profile from './Profile';
import DiveLogsList from './DiveLogsList';
import SignIn from './../SignIn';
import SignUp from './../SignUp';
import About from './../About';
import NewDiveLog from './NewDiveLog';
import ViewLog from './ViewLog';
import EditInfo from './EditInfo';
import Settings from './Settings';
import Calculators from './../Calculators';
import DiveTables from '../DiveTables';
import Schools from '../Schools';
import News from './News';
import ThankYou from '../../views/ThankYou';
import Chamber from '../Chamber';
import FrontPage from '../FrontPage';


function Dashboard(){
    
    const history = useHistory();

    const signOutSubmitHandler = () =>{
        localStorage.clear();
        history.push('/home');
    }

    const toggleSidebarDisplay = () =>{
        if(localStorage.getItem('loggedInUser')){
                return(
                    <nav className="col-md-2 d-none d-md-block bg-color sidebar">
                        <div className="flex-shrink-0 p-3 bg-white" styles="width: 280px;">
                            <h3>Left Surface</h3>
                            <ul className="list-unstyled ps-0">
                            <li className="mb-1">
                            <h6>Account</h6>
                                <div className="collapse show" id="home-collapse">
                                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                        <li className="nav-link">
                                            <Link className="nav-link active" to="/dive-log-list">
                                                 Dive Logs
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="nav-link active" to="/create-new-log">
                                                Create New Log
                                            </Link>
                                        </li>
                                        <li className="nav-link">
                                            <Link className="nav-link active" to="/profile">
                                                 Profile
                                            </Link>
                                        </li>
                                        <li className="nav-link">
                                            <Link className="nav-link active" to="/settings">
                                                 Settings
                                            </Link>
                                        </li>
                                        <li className="nav-link">
                                            <Link className="nav-link active" onClick={signOutSubmitHandler}>
                                                 Sign Out
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            <li className="border-top my-3"></li>

                            <li className="mb-1">
                                <h6>Resources</h6>
                                <div className="collapse show" id="dashboard-collapse">
                                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                    <li className="nav-link">
                                            <Link className="nav-link active" to="/dive-tables">
                                                 Dive Tables
                                            </Link>
                                        </li>
                                        <li className="nav-link">
                                            <Link className="nav-link active" to="/calculators">
                                                 Calculators
                                            </Link>
                                        </li>
                                        <li className="nav-link">
                                            <Link className="nav-link active" to="/chamber">
                                                 Chamber
                                            </Link>
                                        </li>
                                        <li className="nav-link">
                                            <Link className="nav-link active" to="/schools">
                                                 Schools
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>    
                            </ul>
                        </div>
                    </nav>
                )
        } else {
            return(
                    <nav className="col-md-2 d-none d-md-block bg-color sidebar">
                        <div className="flex-shrink-0 p-3 bg-white" >
                            <h3>Left Surface</h3>
                            <ul className="list-unstyled ps-0">
                            <li className="mb-1">
                            <h6>Account</h6>
                                <div className="collapse show" id="home-collapse">
                                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                        <li className="nav-link">
                                            <Link className="nav-link active" to="/sign-in">
                                                 Sign In
                                            </Link>
                                        </li>
                                        <li className="nav-link">
                                            <Link className="nav-link active" to="/sign-up">
                                                 Register
                                            </Link>
                                        </li>
                                        <li className="nav-link">
                                            <Link className="nav-link active" to="/about">
                                                 About
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            <li className="border-top my-3"></li>

                            <li className="mb-1">
                                <h6>Resources</h6>
                                <div className="collapse show" id="dashboard-collapse">
                                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                    <li className="nav-link">
                                            <Link className="nav-link active" to="/dive-tables">
                                                 Dive Tables
                                            </Link>
                                        </li>
                                        <li className="nav-link">
                                            <Link className="nav-link active" to="/calculators">
                                                 Calculators
                                            </Link>
                                        </li>
                                        <li className="nav-link">
                                            <Link className="nav-link active" to="/chamber">
                                                 Chamber
                                            </Link>
                                        </li>
                                        <li className="nav-link">
                                            <Link className="nav-link active" to="/schools">
                                                 Schools
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            </ul>
                        </div>
                    </nav>
            )
        }
    }

    return(
        <div className="container-fluid home-margin-top-less-200px">
            <div className="row">

                {/* replace the nav section with toggle */}
                    {toggleSidebarDisplay()}
                {/* End where toggle goes */}

                <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                    <Route path="/dashboard" component={News} />
                    <Route path="/about" component={About} />
                    <Route path="/sign-up" component={SignUp} />
                    <Route path="/sign-in" component={SignIn} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/create-new-log" component={NewDiveLog} />
                    <Route path="/dive-log-list" component={DiveLogsList} />
                    <Route path="/view-dive-log/:id" component={ViewLog}/>
                    <Route path="/edit-user" component={EditInfo}/>
                    <Route path="/settings" component={Settings}/>
                    <Route path="/calculators" component={Calculators}/>
                    <Route path="/dive-tables" component={DiveTables}/>
                    <Route path="/schools" component={Schools}/>
                    <Route path="/thank-you" component={ThankYou} />
                    <Route path="/chamber" component={Chamber} />
                    <Route path="/home" component={FrontPage} />
                </main>             
            </div>
        </div>

    )
}

export default Dashboard;