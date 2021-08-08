
import { useState, useEffect } from 'react';
import { Container, Col } from 'react-bootstrap';
import axios from 'axios';


function Calculators(){

    const [currentUser, setCurrentUser] = useState({});
    const [refreshPage, setRefreshPage] = useState(0);
    const [resultMMP, setResultMMP] = useState();
    const [calcInputsMMP, setCalcInputsMMP] = useState(
        {
            depth:'',
            obp:''
        });
    const [resultGasLP, setResultGasLP] = useState();
    const [calcInputsGasLP, setCalcInputsGasLP] = useState(
        {
            ATA:'',
            ACFM:'',
            numberOfDivers:''
        }
    )
    const [resultGasHP, setResultGasHP] = useState();
    const [calcInputsGasHP, setCalcInputsGasHP] = useState(
        {
            ATA:'',
            ACFM:'',
            numberOfDivers:'',
            time:''
        }
    )
    const [resultATADepth, setResultATADepth] = useState();
    const [calcInputsATADepth, setCalcInputsATADepth] = useState(
        {
            depth:''
        }
    )
    const [resultAtaPsig, setResultAtaPsig] = useState();
    const [calcInputAtaPsig, setCalcInputAtaPsig] = useState(
        {
            psig:''
        }
    )
        useEffect(()=>{
            const params = {
                id: localStorage.getItem('loggedInUser')
            }
            axios.get('http://localhost:8080/findUserById', {params})
            .then(response =>{
                setCurrentUser(response.data);
            }).catch(error =>{
            });
        },[refreshPage]
        );

        const changeHandlerMMP = (event) =>{
            const name = event.target.name;
            const value = event.target.value;
            const tempLog = {...calcInputsMMP};
            tempLog[name] = value;
            setCalcInputsMMP(tempLog);
        }

        const calculateMMP = () => {
            console.log("Depth ="+ calcInputsMMP.depth)
            console.log("OBP = "+ calcInputsMMP.obp)
            const params ={
                depth: calcInputsMMP.depth,
                obp: calcInputsMMP.obp
            }
            axios.get("http://localhost:8080/calculateMMP", {params}
            )
            .then(response=>{
                setResultMMP(response.data);
                setRefreshPage(count=>count+1);
            })
            }

        const changeHandlerGasLP = (event) =>{
            const name = event.target.name;
            const value = event.target.value;
            const tempLog = {...calcInputsGasLP};
            tempLog[name] = value;
            setCalcInputsGasLP(tempLog);
        }

        const calculateGasLP = () =>{
            const params ={
                ata: calcInputsGasLP.ATA,
                acfm: calcInputsGasLP.ACFM,
                num: calcInputsGasLP.numberOfDivers
            }
            axios.get("http://localhost:8080/calculateGasRequirementLP", {params})
            .then(response=>{
                setResultGasLP(response.data);
                setRefreshPage(count=>count+1);
            })
        }

        const changeHandlerGasHP = (event) =>{
            const name = event.target.name;
            const value = event.target.event;
            const tempLog = {...calcInputsGasHP};
            tempLog[name] = value;
            setCalcInputsGasHP(tempLog);
        }
        const calculateGasHP = () =>{
            const params ={
                ata: calcInputsGasHP.ATA,
                acfm: calcInputsGasHP.ACFM,
                num: calcInputsGasHP.numberOfDivers,
                time: calcInputsGasHP.time
            }
            axios.get("http://localhost:8080/calculateGasRequirementHP", {params})
            .then(response=>{
                setResultGasHP(response.data);
                setRefreshPage(count=>count+1);
            })
        }
        const changeHandlerATADepth = (event) =>{
            const name = event.target.name;
            const value = event.target.value;
            const tempLog = {...calcInputsATADepth};
            tempLog[name] = value;
            setCalcInputsATADepth(tempLog);
        }

        const calculateATADepth = () =>{
            const params ={
                depth: calcInputsATADepth.depth
            }
            axios.get("http://localhost:8080/calculateATAWithDepth", {params})
            .then(response=>{
                setResultATADepth(response.data);
                setRefreshPage(count=>count+1);
            })
        }

        const changeHandlerAtaPsig = (event) =>{
            const name = event.target.name;
            const value = event.target.value;
            const tempLog = {...calcInputAtaPsig};
            tempLog[name] = value;
            setCalcInputAtaPsig(tempLog);
        }

        const calculateAtaPsig = () =>{
            const params ={
                psig: calcInputAtaPsig.psig
            }
            axios.get("http://localhost:8080/calculateATAWithPSIG", {params})
            .then(response=>{
                setResultAtaPsig(response.data);
                setRefreshPage(count=>count+1);
            })
        }



    return(
        <div>
            <h1>Dive Calculators</h1>
        <div className="calculator_container">
            
            <Container>
                <div class="card">
                    <div class="card-header">
                        Minimum Manifold Pressure
                    </div>
                    <div class="card-body">
                        <p>Over Bottom Pressure may vary with equipment and depth</p>
                        <p>0' - 60' = 100 psig</p>
                        <p>61' - 130' = 135 psig</p>
                        <p> &gt;131' = 165 psig</p>
                        <form>
                            <Col>
                                <input onChange={changeHandlerMMP} value={calcInputsMMP.depth} name="depth" type="number" placeholder="Depth"/>
                                <input onChange={changeHandlerMMP} value={calcInputsMMP.obp} name="obp" type="number" placeholder="OBP"/>
                            </Col> 
                            <button type="button" onClick={calculateMMP}>Calculate</button>   
                        </form>
                        <div className="alert alert-warning alert-dismissible fade show" role="alert">
                            {resultMMP}
                        </div>
                    </div>
                    <div class="card-footer text-muted">
                        MMP = Depth x .445 +OBP
                    </div>
                </div>

                <div class="card">
                    <div class="card-header">
                        Atmospheres Absolute - Using Depth
                    </div>
                    <div class="card-body">
                        <form>
                            <p>Calculated for Feet of Sea Water.</p>
                            <Col>
                                <input onChange={changeHandlerATADepth} value={calcInputsATADepth.depth} name="depth" type="number" placeholder="Depth"/>
                            </Col> 
                            <button type="button" onClick={calculateATADepth}>Calculate</button>   
                        </form>
                        <div className="alert alert-warning alert-dismissible fade show" role="alert">
                            {resultATADepth}
                        </div>
                    </div>
                    <div class="card-footer text-muted">
                       ATA = (Depth + 33)/33
                    </div>
                </div>

                <div class="card">
                    <div class="card-header">
                        Atmospheres Absolute - Using PSIG
                    </div>
                    <div class="card-body">
                        <form>
                            <Col>
                                <input onChange={changeHandlerAtaPsig} value={calcInputAtaPsig.psig} name="psig" type="number" placeholder="PSIG"/>
                            </Col> 
                            <button type="button" onClick={calculateAtaPsig}>Calculate</button>   
                        </form>
                        <div className="alert alert-warning alert-dismissible fade show" role="alert">
                            {resultAtaPsig}
                        </div>
                    </div>
                    <div class="card-footer text-muted">
                       ATA = (Depth + 14.7)/14.7
                    </div>
                </div>

                <div class="card">
                    <div class="card-header">
                        Gas Requirement for Low Pressure
                    </div>
                    <div class="card-body">
                        <p>ATA = Atmospheres Absolute</p>
                        <p>ACFM = actual cubic ft. / minute</p>
                        <p>(Demand regulators are typically 1.4 acfm)</p>
                        <p>(Free flow hats are typically 4.5 acfm)</p>
                        <form>
                            <Col>
                                <input onChange={changeHandlerGasLP} value={calcInputsGasLP.ATA} name="ATA" type="number" placeholder="ATA"/>
                                <input onChange={changeHandlerGasLP} value={calcInputsGasLP.ACFM} name="ACFM" type="number" placeholder="ACFM"/>
                                <input onChange={changeHandlerGasLP} value={calcInputsGasLP.numberOfDivers} name="numberOfDivers" type="number" placeholder="Number of Divers"/>
                            </Col> 
                            <button type="button" onClick={calculateGasLP}>Calculate</button>   
                        </form>
                        <div className="alert alert-warning alert-dismissible fade show" role="alert">
                            {resultGasLP} Standard Cubic Feet per Minute
                        </div>
                    </div>
                    <div class="card-footer text-muted">
                        SCFM = ATA x ACFM x Divers
                    </div>
                </div>

                <div class="card">
                    <div class="card-header">
                        Gas Requirement for High Pressure
                    </div>
                    <div class="card-body">
                        <p>ATA = Atmospheres Absolute</p>
                        <p>ACFM = actual cubic ft. / minute</p>
                        <p>(Demand regulators are typically 1.4 acfm)</p>
                        <p>(Free flow hats are typically 4.5 acfm)</p>
                        <form>
                            <Col>
                                <input onChange={changeHandlerGasHP} value={calcInputsGasHP.ATA} name="ATA" type="number" placeholder="ATA"/>
                                <input onChange={changeHandlerGasHP} value={calcInputsGasHP.ACFM} name="ACFM" type="number" placeholder="ACFM"/>
                                <input onChange={changeHandlerGasHP} value={calcInputsGasHP.numberOfDivers} name="numberOfDivers" type="number" placeholder="Number of Divers"/>
                                <input onChange={changeHandlerGasHP} value={calcInputsGasHP.time} name="time" type="number" placeholder="Time"/>
                            </Col> 
                            <button type="button" onClick={calculateGasHP}>Calculate</button>   
                        </form>
                        <div className="alert alert-warning alert-dismissible fade show" role="alert">
                            {resultGasHP} Standard Cubic Feet
                        </div>
                    </div>
                    <div class="card-footer text-muted">
                        SCF = ATA x ACFM x Divers x Time
                    </div>
                </div>
            </Container>
        </div>
        </div>
    )
}

export default Calculators;