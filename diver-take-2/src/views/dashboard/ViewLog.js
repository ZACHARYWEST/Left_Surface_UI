

import axios from 'axios';
import { useEffect, useState } from 'react';
import './diveLog.css';
import { Row, Container, Col } from 'react-bootstrap';
import { useParams, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLongArrowAltLeft} from "@fortawesome/free-solid-svg-icons"


function ViewLog(props){

    let {id} = useParams();
    console.log("id is : " + id)
    const history = useHistory();

    const [viewThisDiveLog, setViewThisDiveLog] = useState(        
        {
            diveLogId:'',
            userId:'',
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
    })

    useEffect(()=>{
        const params = {
            diveLogId: id
        }
        axios.get('http://localhost:8080/viewSpecificDiverLog', {params})
            .then(response =>{
                setViewThisDiveLog(response.data);
        }).catch(error =>{
        });
    },[]
    );

    const returnButton = () =>{
        history.push('/dive-log-list');
    }

    return(
        <main>
                <div className="bg-color">
                    
                    <div className="container fluid">
                        <Container>
                            <button onClick={returnButton} className="btn btn-success">
                                <FontAwesomeIcon icon={faLongArrowAltLeft}/>Return
                            </button>
                            <div className="card shadow-sm">
                                <h1 className="divelog-head">Record of Dive</h1>
                            <div >
                                <form className="create-log-form">
                                    <section>
                                        <Row>
                                            <Col>
                                                <div class="col-md-4">
                                                    <label className="viewlog_labels">Diver's Name</label>
                                                    <p>{viewThisDiveLog.diverName}</p>
                                                </div>
                                                <div class="col-md-4">
                                                    <label className="viewlog_labels">Dive Date</label>
                                                    <p>{viewThisDiveLog.date}</p>
                                                </div>
                                                <div class="col-md-4">
                                                    <label className="viewlog_labels">Geographic Location</label>
                                                    <p>{viewThisDiveLog.location}</p>
                                                </div>
                                                <div class="col-md-4">
                                                    <label className="viewlog_labels">Vessel or Platform</label>
                                                    <p>{viewThisDiveLog.vessel}</p>
                                                </div>
                                            </Col>
                                            <Col>
                                            <fieldset className="fieldset1">
                                                <legend>Water Conditions</legend>
                                                <ul>
                                                    <li>
                                                        <label className="viewlog_labels">Bottom Condition</label>
                                                        <p>{viewThisDiveLog.bottomCondition}</p>
                                                    </li>
                                                    <li>
                                                        <label className="viewlog_labels">Sea State</label>
                                                        <p>{viewThisDiveLog.seaState}</p>
                                                    </li>
                                                    <li>
                                                        <label className="viewlog_labels">Bottom Temperature</label>
                                                        <p>{viewThisDiveLog.temperature}</p>
                                                    </li>
                                                    <li>
                                                        <label className="viewlog_labels">Bottom Visibility</label>
                                                        <p>{viewThisDiveLog.visibility}</p>
                                                    </li>
                                                    <li>
                                                        <label className="viewlog_labels">Bottom Current</label>
                                                        <p>{viewThisDiveLog.current}</p>
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
                                                    <label className="viewlog_labels">Beginning Repet Group</label>
                                                    <p>{viewThisDiveLog.diveOneBeginningRepet}</p>
                                                </li>
                                                <li>
                                                    <label className="viewlog_labels">Reserved Nitrogen Time</label>
                                                    <p>{viewThisDiveLog.diveOneBeginningRNT}</p>
                                                </li>
                                                <br/>
                                                <li>
                                                    <label className="viewlog_labels">Max Depth</label>
                                                    <p>{viewThisDiveLog.diveOneMaxDepth}</p>
                                                </li>
                                                <li>
                                                    <label className="viewlog_labels">Left Surface</label>
                                                    <p>{viewThisDiveLog.diveOneLeftSurface}</p>
                                                </li>
                                                <li>
                                                    <label className="viewlog_labels">Bottom Time</label>
                                                    <p>{viewThisDiveLog.diveOneBottomTime}</p>
                                                </li>
                                                <li>
                                                    <label className="viewlog_labels">Total Bottom Time</label>
                                                    <p>{viewThisDiveLog.diveOneTBT}</p>
                                                </li>
                                                <li>
                                                    <label className="viewlog_labels">Reach Surface</label>
                                                    <p>{viewThisDiveLog.diveOneReachSurface}</p>
                                                </li>
                                                <br/>
                                                <p className="pSectionsOfBox">For Surface Decompression Only</p>
                                                <br/>
                                                <li>
                                                    <label className="viewlog_labels">Surface Interval</label>
                                                    <p>{viewThisDiveLog.diveOneChamberSurfaceInterval}</p>
                                                </li>
                                                <li>
                                                    <label className="viewlog_labels">Chamber Time</label>
                                                    <p>{viewThisDiveLog.diveOneChamberTime}</p>
                                                </li>
                                                <br/>
                                                <p className="pSectionsOfBox">End of Dive</p>
                                                <li>
                                                    <label className="viewlog_labels">Table Used</label>
                                                    <p>{viewThisDiveLog.diveOneTable}</p>
                                                </li>
                                                <li>
                                                    <label className="viewlog_labels">Repet Group</label>
                                                    <p>{viewThisDiveLog.diveOneRepetGroup}</p>
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
                                                    <label className="viewlog_labels">Beginning Repet Group</label>
                                                    <p>{viewThisDiveLog.diveTwoBeginningRepet}</p>
                                                </li>
                                                <li>
                                                    <label className="viewlog_labels">Reserved Nitrogen Time</label>
                                                    <p>{viewThisDiveLog.diveTwoBeginningRNT}</p>
                                                </li>
                                                <br/>
                                                <li>
                                                    <label className="viewlog_labels">Max Depth</label>
                                                    <p>{viewThisDiveLog.diveTwoMaxDepth}</p>
                                                </li>
                                                <li>
                                                    <label className="viewlog_labels">Left Surface</label>
                                                    <p>{viewThisDiveLog.diveTwoLeftSurface}</p>
                                                </li>
                                                <li>
                                                    <label className="viewlog_labels">Bottom Time</label>
                                                    <p>{viewThisDiveLog.diveTwoBottomTime}</p>
                                                </li>
                                                <li>
                                                    <label className="viewlog_labels">Total Bottom Time</label>
                                                    <p>{viewThisDiveLog.diveTwoTBT}</p>
                                                </li>
                                                <li>
                                                    <label className="viewlog_labels">Reach Surface</label>
                                                    <p>{viewThisDiveLog.diveTwoReachSurface}</p>
                                                </li>
                                                <br/>
                                                <p className="pSectionsOfBox">For Surface Decompression Only</p>
                                                <br/>
                                                <li>
                                                    <label className="viewlog_labels">Surface Interval</label>
                                                    <p>{viewThisDiveLog.diveTwoChamberSurfaceInterval}</p>
                                                </li>
                                                <li>
                                                    <label className="viewlog_labels">Chamber Time</label>
                                                    <p>{viewThisDiveLog.diveTwoChamberTime}</p>
                                                </li>
                                                <br/>
                                                <p className="pSectionsOfBox">End of Dive</p>
                                                <li>
                                                    <label className="viewlog_labels">Table Used</label>
                                                    <p>{viewThisDiveLog.diveTwoTableUsed}</p>
                                                </li>
                                                <li>
                                                    <label className="viewlog_labels">Repet Group</label>
                                                    <p>{viewThisDiveLog.diveTwoRepetAfterDive}</p>
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
                                                    <label className="viewlog_labels">Beginning Repet Group</label>
                                                    <p>{viewThisDiveLog.diveThreeBeginningRepet}</p>
                                                </li>
                                                <li>
                                                    <label className="viewlog_labels">Reserved Nitrogen Time</label>
                                                    <p>{viewThisDiveLog.diveThreeBeginningRNT}</p>
                                                </li>
                                                <br/>
                                                <li>
                                                    <label className="viewlog_labels">Max Depth</label>
                                                    <p>{viewThisDiveLog.diveThreeMaxDepth}</p>
                                                </li>
                                                <li>
                                                    <label className="viewlog_labels">Left Surface</label>
                                                    <p>{viewThisDiveLog.diveThreeLeftSurface}</p>
                                                </li>
                                                <li>
                                                    <label className="viewlog_labels">Bottom Time</label>
                                                    <p>{viewThisDiveLog.diveThreeBottomTime}</p>
                                                </li>
                                                <li>
                                                    <label className="viewlog_labels">Total Bottom Time</label>
                                                    <p>{viewThisDiveLog.diveThreeTBT}</p>
                                                </li>
                                                <li>
                                                    <label className="viewlog_labels">Reach Surface</label>
                                                    <p>{viewThisDiveLog.diveThreeReachSurface}</p>
                                                </li>
                                                <br/>
                                                <p className="pSectionsOfBox">For Surface Decompression Only</p>
                                                <br/>
                                                <li>
                                                    <label className="viewlog_labels">Surface Interval</label>
                                                    <p>{viewThisDiveLog.diveThreeChamberSurfaceInterval}</p>
                                                </li>
                                                <li>
                                                    <label className="viewlog_labels">Chamber Time</label>
                                                    <p>{viewThisDiveLog.diveThreeChamberTime}</p>
                                                </li>
                                                <br/>
                                                <p className="pSectionsOfBox">End of Dive</p>
                                                <li>
                                                    <label className="viewlog_labels">Table Used</label>
                                                    <p>{viewThisDiveLog.diveThreeTableUsed}</p>
                                                </li>
                                                <li>
                                                    <label className="viewlog_labels">Repet Group</label>
                                                    <p>{viewThisDiveLog.diveThreeRepetAfterDive}</p>
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
                                                    <label className="viewlog_labels">Beginning Repet Group</label>
                                                    <p>{viewThisDiveLog.diveFourBeginningRepet}</p>
                                                </li>
                                                <li>
                                                    <label className="viewlog_labels">Reserved Nitrogen Time</label>
                                                    <p>{viewThisDiveLog.diveFourRNT}</p>
                                                </li>
                                                <br/>
                                                <li>
                                                    <label className="viewlog_labels">Max Depth</label>
                                                    <p>{viewThisDiveLog.diveFourMaxDepth}</p>
                                                </li>
                                                <li>
                                                    <label className="viewlog_labels">Left Surface</label>
                                                    <p>{viewThisDiveLog.diveFourLeftSurface}</p>
                                                </li>
                                                <li>
                                                    <label className="viewlog_labels">Bottom Time</label>
                                                    <p>{viewThisDiveLog.diveFourBottomTime}</p>
                                                </li>
                                                <li>
                                                    <label className="viewlog_labels">Total Bottom Time</label>
                                                    <p>{viewThisDiveLog.diveFourTBT}</p>
                                                </li>
                                                <li>
                                                    <label className="viewlog_labels">Reach Surface</label>
                                                    <p>{viewThisDiveLog.diveFourReachSurface}</p>
                                                </li>
                                                <br/>
                                                <p className="pSectionsOfBox">For Surface Decompression Only</p>
                                                <br/>
                                                <li>
                                                    <label className="viewlog_labels">Surface Interval</label>
                                                    <p>{viewThisDiveLog.diveFourChamberSurfaceInterval}</p>
                                                </li>
                                                <li>
                                                    <label className="viewlog_labels">Chamber Time</label>
                                                    <p>{viewThisDiveLog.diveFourChamberTime}</p>
                                                </li>
                                                <br/>
                                                <p className="pSectionsOfBox">End of Dive</p>
                                                <li>
                                                    <label className="viewlog_labels">Table Used</label>
                                                    <p>{viewThisDiveLog.diveFourTableUsed}</p>
                                                </li>
                                                <li>
                                                    <label className="viewlog_labels">Repet Group</label>
                                                    <p>{viewThisDiveLog.diveFourRepetAfterDive}</p>
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
                                                    <label className="viewlog_labels">Storage Depth</label>
                                                    <p>{viewThisDiveLog.satDiveOneStorageDepth}</p>
                                                </li>
                                                <li>
                                                    <label className="viewlog_labels">Maximum Depth of Dive</label>
                                                    <p>{viewThisDiveLog.satDiveOneMaxDepth}</p>
                                                </li>
                                                <br/>
                                                <li>
                                                    <label className="viewlog_labels">Time Reached Storage Depth</label>
                                                    <p>{viewThisDiveLog.satDiveOneReachStorageTime}</p>
                                                </li>
                                                <li>
                                                    <label className="viewlog_labels">Time Left Storage Depth</label>
                                                    <p>{viewThisDiveLog.satDiveOneLeftStorageTime}</p>
                                                </li>
                                                <li>
                                                    <label className="viewlog_labels">Bottom Time</label>
                                                    <p>{viewThisDiveLog.satDiveOneBottomTime}</p>
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
                                                    <label className="viewlog_labels">Storage Depth</label>
                                                    <p>{viewThisDiveLog.satDiveTwoStorageDepth}</p>
                                                </li>
                                                <li>
                                                    <label className="viewlog_labels">Maximum Depth of Dive</label>
                                                    <p>{viewThisDiveLog.satDiveTwoMaxDepth}</p>
                                                </li>
                                                <br/>
                                                <li>
                                                    <label className="viewlog_labels">Time Reached Storage Depth</label>
                                                    <p>{viewThisDiveLog.satDiveTwoReachStorageTime}</p>
                                                </li>
                                                <li>
                                                    <label className="viewlog_labels">Time Left Storage Depth</label>
                                                    <p>{viewThisDiveLog.satDiveTwoLeftStorageTime}</p>
                                                </li>
                                                <li>
                                                    <label className="viewlog_labels">Bottom Time</label>
                                                    <p>{viewThisDiveLog.satDiveTwoBottomTime}</p>
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
                                                    <label className="viewlog_labels">Depth</label>
                                                    <p>{viewThisDiveLog.decompStopOneDepth}</p>
                                                </li>
                                                <li>
                                                    <label className="viewlog_labels">Length of Time</label>
                                                    <p>{viewThisDiveLog.decompStopOneLength}</p>
                                                </li>
                                                <li>
                                                    <label className="viewlog_labels">Time Reached</label>
                                                    <p>{viewThisDiveLog.decompStopOneTimeReached}</p>
                                                </li>
                                                <li>
                                                    <label className="viewlog_labels">Time Left</label>
                                                    <p>{viewThisDiveLog.decompStopOneTimeLeft}</p>
                                                </li>
                                                <li>
                                                    <label className="viewlog_labels">Breathing Gas/Mixture</label>
                                                    <p>{viewThisDiveLog.decompStopOneGas}</p>
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
                                                    <label className="viewlog_labels">Depth</label>
                                                    <p>{viewThisDiveLog.decompStopTwoDepth}</p>
                                                </li>
                                                <li>
                                                    <label className="viewlog_labels">Length of Time</label>
                                                    <p>{viewThisDiveLog.decompStopTwoLength}</p>
                                                </li>
                                                <li>
                                                    <label className="viewlog_labels">Time Reached</label>
                                                    <p>{viewThisDiveLog.decompStopTwoTimeReached}</p>
                                                </li>
                                                <li>
                                                    <label className="viewlog_labels">Time Left</label>
                                                    <p>{viewThisDiveLog.decompStopTwoTimeLeft}</p>
                                                </li>
                                                <li>
                                                    <label className="viewlog_labels">Breathing Gas/Mixture</label>
                                                    <p>{viewThisDiveLog.decompStopTwoGas}</p>
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
                                                    <label className="viewlog_labels">Depth</label>
                                                    <p>{viewThisDiveLog.decompStopThreeDepth}</p>
                                                </li>
                                                <li>
                                                    <label className="viewlog_labels">Length of Time</label>
                                                    <p>{viewThisDiveLog.decompStopThreeLength}</p>
                                                </li>
                                                <li>
                                                    <label className="viewlog_labels">Time Reached</label>
                                                    <p>{viewThisDiveLog.decompStopThreeTimeReached}</p>
                                                </li>
                                                <li>
                                                    <label className="viewlog_labels">Time Left</label>
                                                    <p>{viewThisDiveLog.decompStopThreeTimeLeft}</p>
                                                </li>
                                                <li>
                                                    <label className="viewlog_labels">Breathing Gas/Mixture</label>
                                                    <p>{viewThisDiveLog.decompStopThreeGas}</p>
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
                                                    <label className="viewlog_labels">Depth</label>
                                                    <p>{viewThisDiveLog.decompStopFourDepth}</p>
                                                </li>
                                                <li>
                                                    <label className="viewlog_labels">Length of Time</label>
                                                    <p>{viewThisDiveLog.decompStopFourLength}</p>
                                                </li>
                                                <li>
                                                    <label className="viewlog_labels">Time Reached</label>
                                                    <p>{viewThisDiveLog.decompStopFourTimeReached}</p>
                                                </li>
                                                <li>
                                                    <label className="viewlog_labels">Time Left</label>
                                                    <p>{viewThisDiveLog.decompStopFourTimeLeft}</p>
                                                </li>
                                                <li>
                                                    <label className="viewlog_labels">Breathing Gas/Mixture</label>
                                                    <p>{viewThisDiveLog.decompStopFourGas}</p>
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
                                                    <label className="viewlog_labels">Depth</label>
                                                    <p>{viewThisDiveLog.decompStopFiveDepth}</p>
                                                </li>
                                                <li>
                                                    <label className="viewlog_labels">Length of Time</label>
                                                    <p>{viewThisDiveLog.decompStopFiveLength}</p>
                                                </li>
                                                <li>
                                                    <label className="viewlog_labels">Time Reached</label>
                                                    <p>{viewThisDiveLog.decompStopFiveTimeReached}</p>
                                                </li>
                                                <li>
                                                    <label className="viewlog_labels">Time Left</label>
                                                    <p>{viewThisDiveLog.decompStopFiveTimeLeft}</p>
                                                </li>
                                                <li>
                                                    <label className="viewlog_labels">Breathing Gas/Mixture</label>
                                                    <p>{viewThisDiveLog.decompStopFiveGas}</p>
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
                                                    <label className="viewlog_labels">Depth</label>
                                                    <p>{viewThisDiveLog.decompStopSixDepth}</p>
                                                </li>
                                                <li>
                                                    <label className="viewlog_labels">Length of Time</label>
                                                    <p>{viewThisDiveLog.decompStopSixLength}</p>
                                                </li>
                                                <li>
                                                    <label className="viewlog_labels">Time Reached</label>
                                                    <p>{viewThisDiveLog.decompStopSixDepth}</p>
                                                </li>
                                                <li>
                                                    <label className="viewlog_labels">Time Left</label>
                                                    <p>{viewThisDiveLog.decompStopSixTimeLeft}</p>
                                                </li>
                                                <li>
                                                    <label className="viewlog_labels">Breathing Gas/Mixture</label>
                                                    <p>{viewThisDiveLog.decompStopSixGas}</p>
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
                                                    <label className="viewlog_labels">Depth</label>
                                                    <p>{viewThisDiveLog.decompStopSevenDepth}</p>
                                                </li>
                                                <li>
                                                    <label className="viewlog_labels">Length of Time</label>
                                                    <p>{viewThisDiveLog.decompStopSevenLength}</p>
                                                </li>
                                                <li>
                                                    <label className="viewlog_labels">Time Reached</label>
                                                    <p>{viewThisDiveLog.decompStopSevenTimeReached}</p>
                                                </li>
                                                <li>
                                                    <label className="viewlog_labels">Time Left</label>
                                                    <p>{viewThisDiveLog.decompStopSevenTimeLeft}</p>
                                                </li>
                                                <li>
                                                    <label className="viewlog_labels">Breathing Gas/Mixture</label>
                                                    <p>{viewThisDiveLog.decompStopSevenGas}</p>
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
                                                    <label className="viewlog_labels">Depth</label>
                                                    <p>{viewThisDiveLog.decompStopEightDepth}</p>
                                                </li>
                                                <li>
                                                    <label className="viewlog_labels">Length of Time</label>
                                                    <p>{viewThisDiveLog.decompStopEightLength}</p>
                                                </li>
                                                <li>
                                                    <label className="viewlog_labels">Time Reached</label>
                                                    <p>{viewThisDiveLog.decompStopEightTimeReached}</p>
                                                </li>
                                                <li>
                                                    <label className="viewlog_labels">Time Left</label>
                                                    <p>{viewThisDiveLog.decompStopEightTimeLeft}</p>
                                                </li>
                                                <li>
                                                    <label className="viewlog_labels">Breathing Gas/Mixture</label>
                                                    <p>{viewThisDiveLog.decompStopEightGas}</p>
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
                                                    <label className="viewlog_labels">Depth</label>
                                                    <p>{viewThisDiveLog.decompStopNineDepth}</p>
                                                </li>
                                                <li>
                                                    <label className="viewlog_labels">Length of Time</label>
                                                    <p>{viewThisDiveLog.decompStopNineLength}</p>
                                                </li>
                                                <li>
                                                    <label className="viewlog_labels">Time Reached</label>
                                                    <p>{viewThisDiveLog.decompStopNineTimeReached}</p>
                                                </li>
                                                <li>
                                                    <label className="viewlog_labels">Time Left</label>
                                                    <p>{viewThisDiveLog.decompStopNineTimeLeft}</p>
                                                </li>
                                                <li>
                                                    <label className="viewlog_labels">Breathing Gas/Mixture</label>
                                                    <p>{viewThisDiveLog.decompStopNineGas}</p>
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
                                                            <label className="viewlog_labels">Type of Dive</label>
                                                            <p>{viewThisDiveLog.typeOfDive}</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <label className="viewlog_labels">Breathing Apparatus</label>
                                                        <p>{viewThisDiveLog.breathingApparatus}</p>
                                                    </li>
                                                    <li>
                                                        <label className="viewlog_labels">Diver's Dress Worn</label>
                                                        <p>{viewThisDiveLog.diverDress}</p>
                                                    </li>
                                                    <li>
                                                        <label className="viewlog_labels">Breathing Gas/Mixture</label>
                                                        <p>{viewThisDiveLog.breathingMixture}</p>
                                                    </li>
                                                    <li>
                                                        <label className="viewlog_labels">Work Description</label>
                                                        <p>{viewThisDiveLog.workDescription}</p>
                                                    </li>
                                                    <li>
                                                        <label className="viewlog_labels">Record of Maintenance</label>
                                                        <p>{viewThisDiveLog.recordMaintenance}</p>
                                                    </li>
                                                    <li>
                                                        <label className="viewlog_labels">Final Decompression Table Used</label>
                                                        <p>{viewThisDiveLog.decompScheduleUsed}</p>
                                                    </li>
                                                    <li>
                                                        <label className="viewlog_labels">Note of Illness/Injury</label>
                                                        <p>{viewThisDiveLog.noteOfInjury}</p>
                                                    </li>
                                                </ul>
                                            </Col>
                                            <Col>
                                                <fieldset className="fieldset1">
                                                    <legend>Penetration Dive</legend>
                                                    <p>{viewThisDiveLog.penetration}</p>
                                                    <br/>
                                                    <ul>
                                                        <li>
                                                            <label className="viewlog_labels">Penetration Length</label>
                                                            <p>{viewThisDiveLog.penetrationLength}</p>
                                                        </li>
                                                        <li>
                                                            <label className="viewlog_labels">Describe Structure:</label>
                                                            <p>{viewThisDiveLog.describeStructure}</p>
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
                                                        <label className="viewlog_labels">Name of Contractor </label>
                                                        <p>{viewThisDiveLog.contractorName}</p>
                                                    </li>
                                                </ul>
                                            </Col>
                                            <Col>
                                                <ul>
                                                    <li>
                                                        <label className="viewlog_labels">Address of Contractor </label>
                                                        <p>{viewThisDiveLog.contractorAddress}</p>
                                                    </li>
                                                </ul>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <ul>
                                                    <li>
                                                        <label className="viewlog_labels">Name of Supervisor </label>
                                                        <p>{viewThisDiveLog.supervisorName}</p>
                                                    </li>
                                                </ul>
                                            </Col>
                                            <Col>
                                                <ul>
                                                    <li>
                                                        <label className="viewlog_labels">Name of Standby Diver </label>
                                                        <p>{viewThisDiveLog.StandbyName}</p>
                                                    </li>
                                                </ul>
                                            </Col>
                                            <Col>
                                                <ul>
                                                    <li>
                                                        <label className="viewlog_labels">Name of Tender </label>
                                                        <p>{viewThisDiveLog.TenderName}</p>
                                                    </li>
                                                </ul>
                                            </Col>
                                        </Row>
                                    </section>
                                </form>
                            </div>
                            </div>
                        </Container>
                    </div>
                </div>
        </main>
    )
}

export default ViewLog;