import { Fragment } from "react";
import Emp from "./Emp";

const EmpList=({employees})=> {

    return(
        <Fragment>
            <ul className="list-group">
            {
                employees.map((employee,idx)=>(<li className="list-group-item" key={idx}><Emp employee={employee}/></li>))
            }
            </ul>
        </Fragment>
    );
}

export default EmpList;