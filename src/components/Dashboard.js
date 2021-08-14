import { Fragment, useEffect, useState } from "react";
import EmpList from "./EmpList";
import NavBar from "./NavBar";
import axios from "axios";
import AvgMood from "./AvgMood";
import MoodGraph from "./MoodGraph";

const Dashboard=()=> {

    const [employees,setEmployees]=useState([]);
    const [load,setLoad]=useState(true);
    const [err,setErr]=useState(false);
    const serverUrl="https://randomuser.me/api/?results=20";

    const bestMoodFirst=()=> {
        let arr=[...employees];
        arr.sort((e1,e2)=>(e2.dob.age-e1.dob.age));
        setEmployees(arr);
    }

    const worstMoodFirst=()=> {
        let arr=[...employees];
        arr.sort((e1,e2)=>(e1.dob.age-e2.dob.age));
        setEmployees(arr);
    }

    useEffect(
        ()=> {
            setLoad(true);
            setErr(false);
            
            axios.get(serverUrl)
            .then((resp)=> {
                setLoad(false);
                setErr(false);
                setEmployees(resp.data.results);
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
            <NavBar active={"dashboard"} bestMoodFirst={bestMoodFirst} worstMoodFirst={worstMoodFirst}/>
            {load && <div className="spinner-border" role="status"><span className="visually-hidden">Loading...</span></div>}
            {err && <p>Something went wrong!</p>}
            {
                !load && !err &&
                <Fragment>
                    {/* <AvgMood data={}/>
                    <MoodGraph data={}/> */}
                    <EmpList employees={employees}/>
                </Fragment>
            }
        </Fragment>
    );
}

export default Dashboard;