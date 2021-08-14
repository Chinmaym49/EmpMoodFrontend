import { Fragment } from "react";
import "../styles/Card.module.css";

const Emp=({employee})=> {
    return(
        <Fragment>
            <p>Rating : {employee.dob.age}</p>
            <div className="wrap">
                <div className="card">
                    <div className="mail"><p>{employee.email}</p></div>
                    <div className="tag"># {employee.name.last}</div>
                </div>
            </div>
        </Fragment>
    );
}

export default Emp;