
import { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import ViewLog from './ViewLog';
import { Route, useHistory} from 'react-router-dom';
import {faTrashAlt} from "@fortawesome/free-solid-svg-icons"



function DiveLogsList(){

    const [diverLogList, setDiverLogList] = useState([]);
    const [specificDiveLog, setSpecificDiveLog] = useState();
    const [newAction, setNewAction] = useState(
        {
            activityId:'',
            userId: localStorage.getItem('loggedInUser'),
            actionTimeStamp:'',
            actionDescription:"Dive Log deleted."
        });
    const [refreshPage, setRefreshPage] = useState(0);

    const history = useHistory();


    useEffect(()=>{
        const params = {
            id: localStorage.getItem('loggedInUser')
        }
        axios.get('http://localhost:8080/findAllDiversLogs', {params})
        .then(repsonse=>{
            setDiverLogList(repsonse.data);
        }).catch(error=>{
        });
    },[refreshPage]
    );

    const deleteDiveLog = (item) => {
        const tempAction = {...newAction};
        tempAction.actionDescription = "Dive Log deleted.";
        setNewAction(tempAction);
        axios.post('http://localhost:8080/saveActivity', newAction);
        const params = {
            diveLogId: item
        }
        axios.delete(
            "http://localhost:8080/deleteDiverLog", {params}
        )
        .then(repsonse=>{
            setRefreshPage(count=>count+1)
        })
        }

    const viewLogButton = (item) => {
        setRefreshPage(count=>count+1);
        history.push(`/view-dive-log/${item}`);
    }


    console.log(diverLogList);

    return(
        <div>
            <main>
                <div>
                    <div className="bd-example">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Date of Dive</th>
                                <th scope="col">Diver</th>
                                <th scope="col">Supervisor</th>
                                <th scope="col">Contractor</th>
                                <th scope="col">Options
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                        {diverLogList.map((el)=> {
                            console.log(el);
                        return(
                            <tr>
                                <th scope="row">{el.date}</th>
                                <td>{el.diverName}</td>
                                <td>{el.supervisorName}</td>
                                <td>{el.contractorName}</td>
                                <td><button onClick={() => viewLogButton(el.diveLogId)}><FontAwesomeIcon icon={faEye}/></button><button onClick={() => deleteDiveLog(el.diveLogId)}><FontAwesomeIcon icon={faTrashAlt}/></button></td>
                            </tr>
                            )})}
                        </tbody>
                    </table>
                </div>
            </div>
            
            
        </main>        
    </div>
    )
}

export default DiveLogsList;