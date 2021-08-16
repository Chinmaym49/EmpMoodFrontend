import { Fragment, useEffect, useState } from "react";
import EmpList from "./EmpList";
import NavBar from "./NavBar";
import axios from "axios";
import AvgMood from "./AvgMood";
import MoodGraph from "./MoodGraph";

const Dashboard=()=> {

    const [employees,setEmployees]=useState([]);
    const [_employees,_setEmployees]=useState([]);
    const [load,setLoad]=useState(true);
    const [err,setErr]=useState(false);
    const serverUrl="https://grads-coding-challenge-group-7.uc.r.appspot.com/moods";

    const bestMoodFirst=()=> {
        let arr=[..._employees];
        arr.sort((e1,e2)=>(e2.mood-e1.mood));
        _setEmployees(arr);
    }

    const worstMoodFirst=()=> {
        let arr=[..._employees];
        arr.sort((e1,e2)=>(e1.mood-e2.mood));
        _setEmployees(arr);
    }

    useEffect(
        ()=> {
            setLoad(true);
            setErr(false);
            
            axios.get(serverUrl)
            .then((resp)=> {
                setLoad(false);
                setErr(false);
                setEmployees(resp.data);
                _setEmployees(resp.data);
            })
            .catch((err)=> {
                setLoad(false);
                setErr(true);
                console.log(err);
            });
        },[]
    );

    return(
        <Fragment>
            <NavBar active={"dashboard"} bestMoodFirst={bestMoodFirst} worstMoodFirst={worstMoodFirst} setEmployees={_setEmployees} employees={employees}/>
            {load && <div className="spinner-border" role="status"><span className="visually-hidden">Loading...</span></div>}
            {err && <p>Something went wrong!</p>}
            {
                !load && !err &&
                <Fragment>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="sticky-top">
                                <div className="mb-4">
                                    <AvgMood employees={_employees}/>
                                </div>
                                <MoodGraph employees={_employees}/>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <EmpList employees={_employees}/>
                        </div>
                    </div>
                </Fragment>
            }
        </Fragment>
    );
}

export default Dashboard;