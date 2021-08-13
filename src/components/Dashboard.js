import { Fragment, useEffect, useState } from "react";
import EmpList from "./EmpList";
import NavBar from "./NavBar";
import axios from "axios";

const Dashboard=()=> {

    const [employees,setEmployees]=useState([]);
    const [load,setLoad]=useState(true);
    const [err,setErr]=useState(false);
    const serverUrl="https://randomuser.me/api/?results=20";

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
            <NavBar active={"dashboard"}/>
            {load && <div className="spinner-border" role="status"><span className="visually-hidden">Loading...</span></div>}
            {err && <p>Something went wrong!</p>}
            {
                !load && !err &&
                <Fragment>
                    <EmpList employees={employees}/>
                </Fragment>
            }
        </Fragment>
    );
}

export default Dashboard;