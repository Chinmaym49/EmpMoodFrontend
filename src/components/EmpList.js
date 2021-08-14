import { Fragment } from "react";
import Emp from "./Emp";

const EmpList=({employees})=> {

    

    return(
        <Fragment>
            <ul className="list-group list-group-flush">
            {
                employees.map((employee,idx)=>(<Emp key={idx} employee={employee}/>))
            }
            </ul>
        </Fragment>
    );
}

export default EmpList;