import Emp from "./Emp";

const EmpList=({employees})=> {

    return(
        <ul className="list-group list-group-flush">
        {
            employees.map((employee,idx)=>(<Emp key={idx} employee={employee}/>))
        }
        </ul>
    );
}

export default EmpList;