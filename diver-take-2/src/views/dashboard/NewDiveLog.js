
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import './diveLog.css';
import { Row, Container, Col } from 'react-bootstrap';

function NewDiveLog(){

    // const [currentUser, setCurrentUser] = useState({})
    const [createLog, setCreateLog] = useState(
        {
            diveLogId:'',
            userId: localStorage.getItem('loggedInUser'),
            diverName:'',
            date:'',
            bottomCondition:'',
            seaState:'',
            temperature:'',
            visibility:'',
            current:'',
            location:'',
            vessel:'',
            diveOneBeginningRepet:'',
            diveOneBeginningRNT:'',
            diveOneMaxDepth:'',
            diveOneLeftSurface:'',
            diveOneBottomTime:'',
            diveOneTBT:'',
            diveOneReachSurface:'',
            diveOneChamberSurfaceInterval:'',
            diveOneChamberTime:'',
            diveOneTable:'',
            diveOneRepetGroup:'',
            diveTwoBeginningRepet:'',
            diveTwoBeginningRNT:'',
            diveTwoMaxDepth:'',
            diveTwoLeftSurface:'',
            diveTwoBottomTime:'',
            diveTwoTBT:'',
            diveTwoReachSurface:'',
            diveTwoChamberSurfaceInterval:'',
            diveTwoChamberTime:'',
            diveTwoTableUsed:'',
            diveTwoRepetAfterDive:'',
            diveThreeBeginningRepet:'',
            diveThreeBeginningRNT:'',
            diveThreeMaxDepth:'',
            diveThreeLeftSurface:'',
            diveThreeBottomTime:'',
            diveThreeTBT:'',
            diveThreeReachSurface:'',
            diveThreeChamberSurfaceInterval:'',
            diveThreeChamberTime:'',
            diveThreeTableUsed:'',
            diveThreeRepetAfterDive:'',
            diveFourBeginningRepet:'',
            diveFourRNT:'',
            diveFourMaxDepth:'',
            diveFourLeftSurface:'',
            diveFourBottomTime:'',
            diveFourTBT:'',
            diveFourReachSurface:'',
            diveFourChamberSurfaceInterval:'',
            diveFourChamberTime:'',
            diveFourTableUsed:'',
            diveFourRepetAfterDive:'',
            satDiveOneStorageDepth:'',
            satDiveOneMaxDepth:'',
            satDiveOneReachStorageTime:'',
            satDiveOneLeftStorageTime:'',
            satDiveOneBottomTime:'',
            satDiveTwoStorageDepth:'',
            satDiveTwoMaxDepth:'',
            satDiveTwoReachStorageTime:'',
            satDiveTwoLeftStorageTime:'',
            satDiveTwoBottomTime:'',
            decompStopOneDepth:'',
            decompStopOneLength:'',
            decompStopOneTimeReached:'',
            decompStopOneTimeLeft:'',
            decompStopOneGas:'',
            decompStopTwoDepth:'',
            decompStopTwoLength:'',
            decompStopTwoTimeReached:'',
            decompStopTwoTimeLeft:'',
            decompStopTwoGas:'',
            decompStopThreeDepth:'',
            decompStopThreeLength:'',
            decompStopThreeTimeReached:'',
            decompStopThreeTimeLeft:'',
            decompStopThreeGas:'',
            decompStopFourDepth:'',
            decompStopFourLength:'',
            decompStopFourTimeReached:'',
            decompStopFourTimeLeft:'',
            decompStopFourGas:'',
            decompStopFiveDepth:'',
            decompStopFiveLength:'',
            decompStopFiveTimeReached:'',
            decompStopFiveTimeLeft:'',
            decompStopFiveGas:'',
            decompStopSixDepth:'',
            decompStopSixLength:'',
            decompStopSixTimeReached:'',
            decompStopSixTimeLeft:'',
            decompStopSixGas:'',
            decompStopSevenDepth:'',
            decompStopSevenLength:'',
            decompStopSevenTimeReached:'',
            decompStopSevenTimeLeft:'',
            decompStopSevenGas:'',
            decompStopEightDepth:'',
            decompStopEightLength:'',
            decompStopEightTimeReached:'',
            decompStopEightTimeLeft:'',
            decompStopEightGas:'',
            decompStopNineDepth:'',
            decompStopNineLength:'',
            decompStopNineTimeReached:'',
            decompStopNineTimeLeft:'',
            decompStopNineGas:'',
            breathingApparatus:'',
            diverDress:'',
            breathingMixture:'',
            workDescription:'',
            recordMaintenance:'',
            decompScheduleUsed:'',
            noteOfInjury:'',
            penetration:'',
            penetrationLength:'',
            describeStructure:'',
            typeOfDive:'',
            contractorName:'',
            contractorAddress:'',
            supervisorName:'',
            StandbyName:'',
            TenderName:''
        }
    )
    const [newAction, setNewAction] = useState(
        {
            activityId:'',
            userId: localStorage.getItem('loggedInUser'),
            actionTimeStamp:'',
            actionDescription:"Dive Log created."
        });


    const history = useHistory();

    // useEffect(()=>{
    //     const params = {
    //         id: localStorage.getItem('loggedInUser')
    //     }
    //     axios.get('http://localhost:8080/findUserById', {params})
    //     .then(response =>{
    //         setCurrentUser(response.data);
    //         console.log("this is current user", response.data);
    //     }).catch(error =>{

    //     });
    // },[]
    // );

    const changeLogHandler = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        const tempLog = {...createLog};
        tempLog[name] = value;
        setCreateLog(tempLog);
    }

    const createSubmitHandler = () =>{
        const tempAction = {...newAction};
        tempAction.actionDescription = "Dive Log created.";
        setNewAction(tempAction);
        axios.post('http://localhost:8080/saveActivity', newAction);
        axios.post(`http://localhost:8080/saveLog`, createLog)
        .then(response =>{
            history.push('/dive-log-list');
        })
        .catch(error =>{
            console.log("in future, add error page")
        });
    }

 

    return(
                <div className="bg-color">
                    <h1> Create a New Record</h1>
                    <div className="container fluid">
                        <Container>
                            <div className="card shadow-sm">
                                <h1 className="divelog-head">Record of Dive</h1>
                            <div >
                                <form className="create-log-form">
                                    <section>
                                        <Row>
                                            <Col>
                                                <div className="col-md-4">
                                                    <label for="input1">Diver's Name</label>
                                                    <input onChange={changeLogHandler} value={createLog.diverName} name="diverName" type="text" id="input1"/>
                                                </div>
                                                <div className="col-md-4">
                                                    <label for="input2">Dive Date</label>
                                                    <input onChange={changeLogHandler} value={createLog.date} name="date" type="date" id="input2"/>
                                                </div>
                                                <div className="col-md-4">
                                                    <label for="input8">Geographic Location</label>
                                                    <input onChange={changeLogHandler} value={createLog.location} name="location" type="text" id="input8"/>
                                                </div>
                                                <div className="col-md-4">
                                                    <label for="input9">Vessel or Platform</label>
                                                    <input onChange={changeLogHandler} value={createLog.vessel} name="vessel" type="text" id="input9"/>
                                                </div>
                                            </Col>
                                            <Col>
                                            <fieldset className="fieldset1">
                                                <legend>Water Conditions</legend>
                                                <ul>
                                                    <li>
                                                        <label for="input3">Bottom Condition</label>
                                                        <input  className="adjust-input-width" onChange={changeLogHandler} value={createLog.bottomCondition} name="bottomCondition" type="text" id="input3"/>
                                                    </li>
                                                    <li>
                                                        <label for="input4">Sea State</label>
                                                        <input  className="adjust-input-width" onChange={changeLogHandler} value={createLog.seaState} name="seaState" type="text" id="input4"/>
                                                    </li>
                                                    <li>
                                                        <label for="input5">Bottom Temperature</label>
                                                        <input  className="adjust-input-width" onChange={changeLogHandler} value={createLog.temperature} name="temperature" type="text" id="input5"/>
                                                    </li>
                                                    <li>
                                                        <label for="input6">Bottom Visibility</label>
                                                        <input  className="adjust-input-width" onChange={changeLogHandler} value={createLog.visibility} name="visibility" type="text" id="input6"/>
                                                    </li>
                                                    <li>
                                                        <label for="input7">Bottom Current</label>
                                                        <input  className="adjust-input-width" onChange={changeLogHandler} value={createLog.current} name="current" type="text" id="input7"/>
                                                    </li>
                                                </ul>
                                                <br/>
                                            </fieldset>
                                            </Col>
                                        </Row>
                                    </section>
                                    <section>
                                        <h3 className="section-head"> - For Bell Bounce or Surface Dives - </h3>
                                {/* Dive One */}
                                    <Row>
                                        <Col>
                                        <fieldset className="fieldset1">
                                            <legend>Dive One</legend>
                                            <ul>
                                            <p className="pSectionsOfBox">Beginning of Dive</p>
                                                <li>
                                                    <label for="input10">Beginning Repet Group</label>
                                                    <input  className="adjust-input-width" onChange={changeLogHandler} value={createLog.diveOneBeginningRepet} name="diveOneBeginningRepet" type="text" id="input10"/>
                                                </li>
                                                <li>
                                                    <label for="input11">Reserved Nitrogen Time</label>
                                                    <input  className="adjust-input-width" onChange={changeLogHandler} value={createLog.diveOneBeginningRNT} name="diveOneBeginningRNT" type="text" id="input11"/>
                                                </li>
                                                <br/>
                                                <li>
                                                    <label for="input12">Max Depth</label>
                                                    <input  className="adjust-input-width" onChange={changeLogHandler} value={createLog.diveOneMaxDepth} name="diveOneMaxDepth" type="text" id="input12"/>
                                                </li>
                                                <li>
                                                    <label for="input13">Left Surface</label>
                                                    <input  className="adjust-input-width" onChange={changeLogHandler} value={createLog.diveOneLeftSurface} name="diveOneLeftSurface" type="text" id="input13"/>
                                                </li>
                                                <li>
                                                    <label for="input14">Bottom Time</label>
                                                    <input  className="adjust-input-width" onChange={changeLogHandler} value={createLog.diveOneBottomTime} name="diveOneBottomTime" type="text" id="input14"/>
                                                </li>
                                                <li>
                                                    <label for="input15">Total Bottom Time</label>
                                                    <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.diveOneTBT} name="diveOneTBT" type="text" id="input15"/>
                                                </li>
                                                <li>
                                                    <label for="input16">Reach Surface</label>
                                                    <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.diveOneReachSurface} name="diveOneReachSurface" type="text" id="input16"/>
                                                </li>
                                                <br/>
                                                <p className="pSectionsOfBox">For Surface Decompression Only</p>
                                                <br/>
                                                <li>
                                                    <label for="input17">Surface Interval</label>
                                                    <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.diveOneChamberSurfaceInterval} name="diveOneChamberSurfaceInterval" type="text" id="input17"/>
                                                </li>
                                                <li>
                                                    <label for="input18">Chamber Time</label>
                                                    <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.diveOneChamberTime} name="diveOneChamberTime" type="text" id="input18"/>
                                                </li>
                                                <br/>
                                                <p className="pSectionsOfBox">End of Dive</p>
                                                <li>
                                                    <label for="input19">Table Used</label>
                                                    <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.diveOneTable} name="diveOneTable" type="text" id="input19"/>
                                                </li>
                                                <li>
                                                    <label for="input20">Repet Group</label>
                                                    <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.diveOneRepetGroup} name="diveOneRepetGroup" type="text" id="input20"/>
                                                </li>
                                            </ul>
                                            <br/>
                                        </fieldset>
                                        </Col>
                                {/* Dive Two */}
                                        <Col>
                                        <fieldset className="fieldset1">
                                            <legend>Dive Two</legend>
                                            <ul>
                                            <p className="pSectionsOfBox">Beginning of Dive</p>
                                                <li>
                                                    <label for="input21">Beginning Repet Group</label>
                                                    <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.diveTwoBeginningRepet} name="diveTwoBeginningRepet" type="text" id="input21"/>
                                                </li>
                                                <li>
                                                    <label for="input22">Reserved Nitrogen Time</label>
                                                    <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.diveTwoBeginningRNT} name="diveTwoBeginningRNT" type="text" id="input22"/>
                                                </li>
                                                <br/>
                                                <li>
                                                    <label for="input23">Max Depth</label>
                                                    <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.diveTwoMaxDepth} name="diveTwoMaxDepth" type="text" id="input23"/>
                                                </li>
                                                <li>
                                                    <label for="input24">Left Surface</label>
                                                    <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.diveTwoLeftSurface} name="diveTwoLeftSurface" type="text" id="input24"/>
                                                </li>
                                                <li>
                                                    <label for="input25">Bottom Time</label>
                                                    <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.diveTwoBottomTime} name="diveTwoBottomTime" type="text" id="input25"/>
                                                </li>
                                                <li>
                                                    <label for="input26">Total Bottom Time</label>
                                                    <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.diveTwoTBT} name="diveTwoTBT" type="text" id="input26"/>
                                                </li>
                                                <li>
                                                    <label for="input27">Reach Surface</label>
                                                    <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.diveTwoReachSurface} name="diveTwoReachSurface" type="text" id="input27"/>
                                                </li>
                                                <br/>
                                                <p className="pSectionsOfBox">For Surface Decompression Only</p>
                                                <br/>
                                                <li>
                                                    <label for="input28">Surface Interval</label>
                                                    <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.diveTwoChamberSurfaceInterval} name="diveTwoChamberSurfaceInterval" type="text" id="input28"/>
                                                </li>
                                                <li>
                                                    <label for="input29">Chamber Time</label>
                                                    <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.diveTwoChamberTime} name="diveTwoChamberTime" type="text" id="input29"/>
                                                </li>
                                                <br/>
                                                <p className="pSectionsOfBox">End of Dive</p>
                                                <li>
                                                    <label for="input30">Table Used</label>
                                                    <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.diveTwoTableUsed} name="diveTwoTableUsed" type="text" id="input30"/>
                                                </li>
                                                <li>
                                                    <label for="input31">Repet Group</label>
                                                    <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.diveTwoRepetAfterDive} name="diveTwoRepetAfterDive" type="text" id="input31"/>
                                                </li>
                                            </ul>
                                            <br/>
                                        </fieldset>
                                        </Col>
                                    </Row>
                                    <br/>
                                {/* Dive 3 */}
                                    <Row>
                                        <Col>
                                        <fieldset className="fieldset1">
                                            <legend>Dive Three</legend>
                                            <ul>
                                            <p className="pSectionsOfBox">Beginning of Dive</p>
                                                <li>
                                                    <label for="input32">Beginning Repet Group</label>
                                                    <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.diveThreeBeginningRepet} name="diveThreeBeginningRepet" type="text" id="input32"/>
                                                </li>
                                                <li>
                                                    <label for="input33">Reserved Nitrogen Time</label>
                                                    <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.diveThreeBeginningRNT} name="diveThreeBeginningRNT" type="text" id="input33"/>
                                                </li>
                                                <br/>
                                                <li>
                                                    <label for="input34">Max Depth</label>
                                                    <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.diveThreeMaxDepth} name="diveThreeMaxDepth" type="text" id="input34"/>
                                                </li>
                                                <li>
                                                    <label for="input35">Left Surface</label>
                                                    <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.diveThreeLeftSurface} name="diveThreeLeftSurface" type="text" id="input35"/>
                                                </li>
                                                <li>
                                                    <label for="input36">Bottom Time</label>
                                                    <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.diveThreeBottomTime} name="diveThreeBottomTime" type="text" id="input36"/>
                                                </li>
                                                <li>
                                                    <label for="input37">Total Bottom Time</label>
                                                    <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.diveThreeTBT} name="diveThreeTBT" type="text" id="input37"/>
                                                </li>
                                                <li>
                                                    <label for="input38">Reach Surface</label>
                                                    <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.diveThreeReachSurface} name="diveThreeReachSurface" type="text" id="input38"/>
                                                </li>
                                                <br/>
                                                <p className="pSectionsOfBox">For Surface Decompression Only</p>
                                                <br/>
                                                <li>
                                                    <label for="input39">Surface Interval</label>
                                                    <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.diveThreeChamberSurfaceInterval} name="diveThreeChamberSurfaceInterval" type="text" id="input39"/>
                                                </li>
                                                <li>
                                                    <label for="input40">Chamber Time</label>
                                                    <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.diveThreeChamberTime} name="diveTwoChamberTime" type="text" id="input40"/>
                                                </li>
                                                <br/>
                                                <p className="pSectionsOfBox">End of Dive</p>
                                                <li>
                                                    <label for="input41">Table Used</label>
                                                    <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.diveThreeTableUsed} name="diveThreeTableUsed" type="text" id="input41"/>
                                                </li>
                                                <li>
                                                    <label for="input42">Repet Group</label>
                                                    <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.diveThreeRepetAfterDive} name="diveThreeRepetAfterDive" type="text" id="input42"/>
                                                </li>
                                            </ul>
                                            <br/>
                                        </fieldset>
                                        </Col>
                                {/* Dive 4 */}
                                        <Col>
                                        <fieldset className="fieldset1">
                                            <legend>Dive Four</legend>
                                            <ul>
                                            <p className="pSectionsOfBox">Beginning of Dive</p>
                                                <li>
                                                    <label for="input43">Beginning Repet Group</label>
                                                    <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.diveFourBeginningRepet} name="diveFourBeginningRepet" type="text" id="input43"/>
                                                </li>
                                                <li>
                                                    <label for="input44">Reserved Nitrogen Time</label>
                                                    <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.diveFourRNT} name="diveFourRNT" type="text" id="input44"/>
                                                </li>
                                                <br/>
                                                <li>
                                                    <label for="input45">Max Depth</label>
                                                    <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.diveFourMaxDepth} name="diveFourMaxDepth" type="text" id="input45"/>
                                                </li>
                                                <li>
                                                    <label for="input46">Left Surface</label>
                                                    <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.diveFourLeftSurface} name="diveFourLeftSurface" type="text" id="input46"/>
                                                </li>
                                                <li>
                                                    <label for="input47">Bottom Time</label>
                                                    <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.diveFourBottomTime} name="diveFourBottomTime" type="text" id="input47"/>
                                                </li>
                                                <li>
                                                    <label for="input48">Total Bottom Time</label>
                                                    <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.diveFourTBT} name="diveFourTBT" type="text" id="input48"/>
                                                </li>
                                                <li>
                                                    <label for="input49">Reach Surface</label>
                                                    <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.diveFourReachSurface} name="diveFourReachSurface" type="text" id="input49"/>
                                                </li>
                                                <br/>
                                                <p className="pSectionsOfBox">For Surface Decompression Only</p>
                                                <br/>
                                                <li>
                                                    <label for="input50">Surface Interval</label>
                                                    <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.diveFourChamberSurfaceInterval} name="diveFourChamberSurfaceInterval" type="text" id="input50"/>
                                                </li>
                                                <li>
                                                    <label for="input51">Chamber Time</label>
                                                    <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.diveFourChamberTime} name="diveFourChamberTime" type="text" id="input51"/>
                                                </li>
                                                <br/>
                                                <p className="pSectionsOfBox">End of Dive</p>
                                                <li>
                                                    <label for="input52">Table Used</label>
                                                    <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.diveFourTableUsed} name="diveFourTableUsed" type="text" id="input52"/>
                                                </li>
                                                <li>
                                                    <label for="input53">Repet Group</label>
                                                    <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.diveFourRepetAfterDive} name="diveFourRepetAfterDive" type="text" id="input53"/>
                                                </li>
                                            </ul>
                                            <br/>
                                        </fieldset>
                                        </Col>
                                    </Row>
                                    </section>
                                    <section>
                                        <h3 className="section-head"> - For Saturation Dives - </h3>
                                    {/* Sat dive 1 */}
                                    <Row>
                                        <Col>
                                        <fieldset className="fieldset1">
                                            <legend>Sat Dive One</legend>
                                            <ul>
                                                <li>
                                                    <label for="input54">Storage Depth</label>
                                                    <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.satDiveOneStorageDepth} name="satDiveOneStorageDepth" type="text" id="input54"/>
                                                </li>
                                                <li>
                                                    <label for="input55">Maximum Depth of Dive</label>
                                                    <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.satDiveOneMaxDepth} name="satDiveOneMaxDepth" type="text" id="input55"/>
                                                </li>
                                                <br/>
                                                <li>
                                                    <label for="input56">Time Reached Storage Depth</label>
                                                    <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.satDiveOneReachStorageTime} name="satDiveOneReachStorageTime" type="text" id="input56"/>
                                                </li>
                                                <li>
                                                    <label for="input57">Time Left Storage Depth</label>
                                                    <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.satDiveOneLeftStorageTime} name="satDiveOneLeftStorageTime" type="text" id="input57"/>
                                                </li>
                                                <li>
                                                    <label for="input58">Bottom Time</label>
                                                    <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.satDiveOneBottomTime} name="satDiveOneBottomTime" type="text" id="input58"/>
                                                </li>
                                            </ul>
                                            <br/>
                                        </fieldset>
                                        </Col>
                                    {/* Sat dive 2 */}
                                        <Col>
                                        <fieldset className="fieldset1">
                                            <legend>Sat Dive Two</legend>
                                            <ul>
                                                <li>
                                                    <label for="input59">Storage Depth</label>
                                                    <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.satDiveTwoStorageDepth} name="satDiveTwoStorageDepth" type="text" id="input59"/>
                                                </li>
                                                <li>
                                                    <label for="input60">Maximum Depth of Dive</label>
                                                    <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.satDiveTwoMaxDepth} name="satDiveTwoMaxDepth" type="text" id="input60"/>
                                                </li>
                                                <br/>
                                                <li>
                                                    <label for="input61">Time Reached Storage Depth</label>
                                                    <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.satDiveTwoReachStorageTime} name="satDiveTwoReachStorageTime" type="text" id="input61"/>
                                                </li>
                                                <li>
                                                    <label for="input62">Time Left Storage Depth</label>
                                                    <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.satDiveTwoLeftStorageTime} name="satDiveTwoLeftStorageTime" type="text" id="input62"/>
                                                </li>
                                                <li>
                                                    <label for="input63">Bottom Time</label>
                                                    <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.satDiveTwoBottomTime} name="satDiveTwoBottomTime" type="text" id="input63"/>
                                                </li>
                                            </ul>
                                            <br/>
                                        </fieldset>
                                        </Col>
                                    </Row>
                                    </section>
                                    <section>
                                        <h3 className="section-head"> - Decompression Stops - </h3>
                                        <Row>
                                            <Col>
                                        <fieldset className="fieldset1">
                                            <legend>Deco. Stop 1</legend>
                                            <ul>
                                                <li>
                                                    <label for="input64">Depth</label>
                                                    <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.decompStopOneDepth} name="decompStopOneDepth" type="text" id="input64"/>
                                                </li>
                                                <li>
                                                    <label for="input65">Length of Time</label>
                                                    <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.decompStopOneLength} name="decompStopOneLength" type="text" id="input65"/>
                                                </li>
                                                <li>
                                                    <label for="input66">Time Reached</label>
                                                    <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.decompStopOneTimeReached} name="decompStopOneTimeReached" type="text" id="input66"/>
                                                </li>
                                                <li>
                                                    <label for="input67">Time Left</label>
                                                    <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.decompStopOneTimeLeft} name="decompStopOneTimeLeft" type="text" id="input67"/>
                                                </li>
                                                <li>
                                                    <label for="input68">Breathing Gas/Mixture</label>
                                                    <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.decompStopOneGas} name="decompStopOneGas" type="text" id="input68"/>
                                                </li>
                                            </ul>
                                            <br/>
                                        </fieldset>
                                        </Col>
                                        <Col>
                                        <fieldset className="fieldset1">
                                            <legend>Deco. Stop 2</legend>
                                            <ul>
                                                <li>
                                                    <label for="input69">Depth</label>
                                                    <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.decompStopTwoDepth} name="decompStopTwoDepth" type="text" id="input69"/>
                                                </li>
                                                <li>
                                                    <label for="input70">Length of Time</label>
                                                    <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.decompStopTwoLength} name="decompStopTwoLength" type="text" id="input70"/>
                                                </li>
                                                <li>
                                                    <label for="input71">Time Reached</label>
                                                    <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.decompStopTwoTimeReached} name="decompStopTwoTimeReached" type="text" id="input71"/>
                                                </li>
                                                <li>
                                                    <label for="input72">Time Left</label>
                                                    <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.decompStopTwoTimeLeft} name="decompStopTwoTimeLeft" type="text" id="input72"/>
                                                </li>
                                                <li>
                                                    <label for="input73">Breathing Gas/Mixture</label>
                                                    <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.decompStopTwoGas} name="decompStopTwoGas" type="text" id="input73"/>
                                                </li>
                                            </ul>
                                            <br/>
                                        </fieldset>
                                        </Col>
                                        <Col>
                                        <fieldset className="fieldset1">
                                            <legend>Deco. Stop 3</legend>
                                            <ul>
                                                <li>
                                                    <label for="input74">Depth</label>
                                                    <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.decompStopThreeDepth} name="decompStopThreeDepth" type="text" id="input74"/>
                                                </li>
                                                <li>
                                                    <label for="input75">Length of Time</label>
                                                    <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.decompStopThreeLength} name="decompStopThreeLength" type="text" id="input75"/>
                                                </li>
                                                <li>
                                                    <label for="input76">Time Reached</label>
                                                    <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.decompStopThreeTimeReached} name="decompStopThreeTimeReached" type="text" id="input76"/>
                                                </li>
                                                <li>
                                                    <label for="input77">Time Left</label>
                                                    <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.decompStopThreeTimeLeft} name="decompStopThreeTimeLeft" type="text" id="input77"/>
                                                </li>
                                                <li>
                                                    <label for="input78">Breathing Gas/Mixture</label>
                                                    <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.decompStopThreeGas} name="decompStopThreeGas" type="text" id="input78"/>
                                                </li>
                                            </ul>
                                            <br/>
                                        </fieldset>
                                        </Col>
                                        </Row>
                                        <br/>
                                        <Row>
                                            <Col>
                                        <fieldset className="fieldset1">
                                            <legend>Deco. Stop 4</legend>
                                            <ul>
                                                <li>
                                                    <label for="input79">Depth</label>
                                                    <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.decompStopFourDepth} name="decompStopFourDepth" type="text" id="input79"/>
                                                </li>
                                                <li>
                                                    <label for="input80">Length of Time</label>
                                                    <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.decompStopFourLength} name="decompStopFourLength" type="text" id="input80"/>
                                                </li>
                                                <li>
                                                    <label for="input81">Time Reached</label>
                                                    <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.decompStopFourTimeReached} name="decompStopFourTimeReached" type="text" id="input81"/>
                                                </li>
                                                <li>
                                                    <label for="input82">Time Left</label>
                                                    <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.decompStopFourTimeLeft} name="decompStopFourTimeLeft" type="text" id="input82"/>
                                                </li>
                                                <li>
                                                    <label for="input83">Breathing Gas/Mixture</label>
                                                    <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.decompStopFourGas} name="decompStopFourGas" type="text" id="input83"/>
                                                </li>
                                            </ul>
                                            <br/>
                                        </fieldset>
                                        </Col>
                                        <Col>
                                        <fieldset className="fieldset1">
                                            <legend>Deco. Stop 5</legend>
                                            <ul>
                                                <li>
                                                    <label for="input84">Depth</label>
                                                    <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.decompStopFiveDepth} name="decompStopFiveDepth" type="text" id="input84"/>
                                                </li>
                                                <li>
                                                    <label for="input85">Length of Time</label>
                                                    <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.decompStopFiveLength} name="decompStopFiveLength" type="text" id="input85"/>
                                                </li>
                                                <li>
                                                    <label for="input86">Time Reached</label>
                                                    <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.decompStopFiveTimeReached} name="decompStopFiveTimeReached" type="text" id="input86"/>
                                                </li>
                                                <li>
                                                    <label for="input87">Time Left</label>
                                                    <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.decompStopFiveTimeLeft} name="decompStopFiveTimeLeft" type="text" id="input87"/>
                                                </li>
                                                <li>
                                                    <label for="input88">Breathing Gas/Mixture</label>
                                                    <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.decompStopFiveGas} name="decompStopFiveGas" type="text" id="input88"/>
                                                </li>
                                            </ul>
                                            <br/>
                                        </fieldset>
                                        </Col>
                                        <Col>
                                        <fieldset className="fieldset1">
                                            <legend>Deco. Stop 6</legend>
                                            <ul>
                                                <li>
                                                    <label for="input89">Depth</label>
                                                    <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.decompStopSixDepth} name="decompStopSixDepth" type="text" id="input89"/>
                                                </li>
                                                <li>
                                                    <label for="input90">Length of Time</label>
                                                    <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.decompStopSixLength} name="decompStopSixLength" type="text" id="input90"/>
                                                </li>
                                                <li>
                                                    <label for="input91">Time Reached</label>
                                                    <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.decompStopSixTimeReached} name="decompStopSixTimeReached" type="text" id="input91"/>
                                                </li>
                                                <li>
                                                    <label for="input92">Time Left</label>
                                                    <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.decompStopSixTimeLeft} name="decompStopSixTimeLeft" type="text" id="input92"/>
                                                </li>
                                                <li>
                                                    <label for="input93">Breathing Gas/Mixture</label>
                                                    <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.decompStopSixGas} name="decompStopSixGas" type="text" id="input93"/>
                                                </li>
                                            </ul>
                                            <br/>
                                        </fieldset>
                                        </Col>
                                        </Row>
                                        <br/>
                                        <Row>
                                            <Col>
                                        <fieldset className="fieldset1">
                                            <legend>Deco. Stop 7</legend>
                                            <ul>
                                                <li>
                                                    <label for="input94">Depth</label>
                                                    <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.decompStopSevenDepth} name="decompStopSevenDepth" type="text" id="input94"/>
                                                </li>
                                                <li>
                                                    <label for="input95">Length of Time</label>
                                                    <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.decompStopSevenLength} name="decompStopSevenLength" type="text" id="input95"/>
                                                </li>
                                                <li>
                                                    <label for="input96">Time Reached</label>
                                                    <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.decompStopSevenTimeReached} name="decompStopSevenTimeReached" type="text" id="input96"/>
                                                </li>
                                                <li>
                                                    <label for="input97">Time Left</label>
                                                    <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.decompStopSevenTimeLeft} name="decompStopSevenTimeLeft" type="text" id="input97"/>
                                                </li>
                                                <li>
                                                    <label for="input98">Breathing Gas/Mixture</label>
                                                    <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.decompStopSevenGas} name="decompStopSevenGas" type="text" id="input98"/>
                                                </li>
                                            </ul>
                                            <br/>
                                        </fieldset>
                                        </Col>
                                        <Col>
                                        <fieldset className="fieldset1">
                                            <legend>Deco. Stop 8</legend>
                                            <ul>
                                                <li>
                                                    <label for="input99">Depth</label>
                                                    <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.decompStopEightDepth} name="decompStopEightDepth" type="text" id="input99"/>
                                                </li>
                                                <li>
                                                    <label for="input100">Length of Time</label>
                                                    <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.decompStopEightLength} name="decompStopEightLength" type="text" id="input100"/>
                                                </li>
                                                <li>
                                                    <label for="input101">Time Reached</label>
                                                    <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.decompStopEightTimeReached} name="decompStopEightTimeReached" type="text" id="input101"/>
                                                </li>
                                                <li>
                                                    <label for="input102">Time Left</label>
                                                    <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.decompStopEightTimeLeft} name="decompStopEightTimeLeft" type="text" id="input102"/>
                                                </li>
                                                <li>
                                                    <label for="input103">Breathing Gas/Mixture</label>
                                                    <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.decompStopEightGas} name="decompStopEightGas" type="text" id="input103"/>
                                                </li>
                                            </ul>
                                            <br/>
                                        </fieldset>
                                        </Col>
                                        <Col>
                                        <fieldset className="fieldset1">
                                            <legend>Deco. Stop 9</legend>
                                            <ul>
                                                <li>
                                                    <label for="input104">Depth</label>
                                                    <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.decompStopNineDepth} name="decompStopNineDepth" type="text" id="input104"/>
                                                </li>
                                                <li>
                                                    <label for="input105">Length of Time</label>
                                                    <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.decompStopNineLength} name="decompStopNineLength" type="text" id="input105"/>
                                                </li>
                                                <li>
                                                    <label for="input106">Time Reached</label>
                                                    <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.decompStopNineTimeReached} name="decompStopNineTimeReached" type="text" id="input106"/>
                                                </li>
                                                <li>
                                                    <label for="input107">Time Left</label>
                                                    <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.decompStopNineTimeLeft} name="decompStopNineTimeLeft" type="text" id="input107"/>
                                                </li>
                                                <li>
                                                    <label for="input108">Breathing Gas/Mixture</label>
                                                    <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.decompStopNineGas} name="decompStopNineGas" type="text" id="input108"/>
                                                </li>
                                            </ul>
                                            <br/>
                                        </fieldset>
                                        </Col>
                                        </Row>
                                    </section>
                                    <br/>
                                    <section>
                                        <Row>
                                            <Col>
                                                <ul>
                                                    <li>
                                                        <div>
                                                            <label for="input118" className="form-label">Type of Dive</label>
                                                            <select className="form-select" onChange={changeLogHandler} id="input118" name="typeOfDive" value={createLog.typeOfDive}>
                                                                <option selected>Choose</option>
                                                                <option>Scuba</option>
                                                                <option>Surface</option>
                                                                <option>Wet Bell</option>
                                                                <option>Bell Bounce</option>
                                                                <option>Saturation</option>
                                                                <option>Other</option>
                                                            </select>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <label for="input109">Breathing Apparatus</label>
                                                        <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.breathingApparatus} name="breathingApparatus" type="text" id="input109"/>
                                                    </li>
                                                    <li>
                                                        <label for="input110">Diver's Dress Worn</label>
                                                        <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.diverDress} name="diverDress" type="text" id="input110"/>
                                                    </li>
                                                    <li>
                                                        <label for="input111">Breathing Gas/Mixture</label>
                                                        <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.breathingMixture} name="breathingMixture" type="text" id="input111"/>
                                                    </li>
                                                    <li>
                                                        <label for="input112">Work Description</label>
                                                        <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.workDescription} name="workDescription" type="text" id="input112"/>
                                                    </li>
                                                    <li>
                                                        <label for="input113">Record of Maintenance</label>
                                                        <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.recordMaintenance} name="recordMaintenance" type="text" id="input113"/>
                                                    </li>
                                                    <li>
                                                        <label for="input114">Final Decompression Table Used</label>
                                                        <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.decompScheduleUsed} name="decompScheduleUsed" type="text" id="input114"/>
                                                    </li>
                                                    <li>
                                                        <label for="input115">Note of Illness/Injury</label>
                                                        <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.noteOfInjury} name="noteOfInjury" type="text" id="input115"/>
                                                    </li>
                                                </ul>
                                            </Col>
                                            <Col>
                                                <fieldset className="fieldset1">
                                                    <legend>Penetration Dive</legend>
                                                    <div className="field">
                                                            <label for="inputyes">
                                                                <input className="adjust-input-width" onChange={changeLogHandler} id="inputyes" value={createLog.penetration = "Yes"} name="penetration" type="radio"/>
                                                            Yes</label>
                                                    </div>
                                                    <div className="field">
                                                            <label dor="inputNo">
                                                                <input className="adjust-input-width" onChange={changeLogHandler} id="inputNo" value={createLog.penetration = "No"} name="penetration" type="radio"/>
                                                            No</label>
                                                    </div>
                                                    <br/>
                                                    <ul>
                                                        <li>
                                                            <label for="input116">Penetration Length</label>
                                                            <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.penetrationLength} name="penetrationLength" type="text" id="input116"/>
                                                        </li>
                                                        <li>
                                                            <label for="input117">Describe Structure:</label>
                                                            <input className="adjust-input-width" onChange={changeLogHandler} value={createLog.describeStructure} name="describeStructure" type="text" id="input117"/>
                                                        </li>
                                                    </ul>
                                                    <br/>
                                                </fieldset>
                                            </Col>
                                        </Row>
                                        <br/>
                                        <Row>
                                            <Col>
                                                <ul>
                                                    <li>
                                                        <label for="input119">Name of Contractor </label>
                                                        <input className="adjust-input-width-2" onChange={changeLogHandler} value={createLog.contractorName} name="contractorName" type="text" id="input119"/>
                                                    </li>
                                                </ul>
                                            </Col>
                                            <Col>
                                                <ul>
                                                    <li>
                                                        <label for="input120">Address of Contractor </label>
                                                        <input className="adjust-input-width-2" onChange={changeLogHandler} value={createLog.contractorAddress} name="contractorAddress" type="text" id="input120"/>
                                                    </li>
                                                </ul>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <ul>
                                                    <li>
                                                        <label for="input121">Name of Supervisor </label>
                                                        <input className="adjust-input-width-2" onChange={changeLogHandler} value={createLog.supervisorName} name="supervisorName" type="text" id="input121"/>
                                                    </li>
                                                </ul>
                                            </Col>
                                            <Col>
                                                <ul>
                                                    <li>
                                                        <label for="input122">Name of Standby Diver </label>
                                                        <input className="adjust-input-width-2" onChange={changeLogHandler} value={createLog.StandbyName} name="StandbyName" type="text" id="input122"/>
                                                    </li>
                                                </ul>
                                            </Col>
                                            <Col>
                                                <ul>
                                                    <li>
                                                        <label for="input123">Name of Tender </label>
                                                        <input className="adjust-input-width-2" onChange={changeLogHandler} value={createLog.TenderName} name="TenderName" type="text" id="input123"/>
                                                    </li>
                                                </ul>
                                            </Col>
                                        </Row>
                                        <br/>
                                    </section>
                                    <div className="d-grid gap-2 center">
                                        <Row><button className="crate-log-button" onClick={createSubmitHandler} type="button" >Create</button></Row>
                                    </div>
                                </form>
                            </div>
                            </div>
                        </Container>
                    </div>
                </div>

    )
}

export default NewDiveLog;