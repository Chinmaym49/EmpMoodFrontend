import { Fragment, useEffect, useState } from "react";
import EmpList from "./EmpList";
import NavBar from "./NavBar";
import axios from "axios";
import AvgMood from "./AvgMood";
import MoodGraph from "./MoodGraph";

// data passed to moodGraph and AvgMood should be  in the form -> data: {"ten":0, "nine":0, "eight":1, "seven":1, "six":1, "five":0, "four":0, "three":0, "two":0, "one": 0}

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

    let d={"ten":0, "nine":0, "eight":1, "seven":1, "six":1, "five":0, "four":0, "three":0, "two":0, "one": 0}

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
                    <div className="row">
                    
                    {/* <AvgMood data={}/>*/}
                    <div className="col-6 overflow-hidden">
                    <MoodGraph data={d}/> 
                    <div className="mt-5">
                    <AvgMood data={d} />
                    </div>
                    </div>
                    <div className="col-6">
                    <EmpList employees={employees}/>
                    
                    </div>
                    </div>
                </Fragment>
            }
        </Fragment>
    );
}

export default Dashboard;