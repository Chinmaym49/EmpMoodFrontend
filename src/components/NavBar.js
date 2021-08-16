import { Fragment } from "react";
import { Link } from "react-router-dom";

const NavBar=(props)=> {

    const fill=(e)=> {
        let s=e.target.value;
        if(s.length>0 && s.charAt(0)==="#")
            s=s.substring(1);
        let arr=[];
        props.employees.forEach((employee)=> {
            if(employee.hashTag.search(s)!==-1)
                arr.push(employee);
        });
        props.setEmployees(arr);
    }

    return(
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><b>Employee Mood of the Day</b></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {
                        props.active==="form" &&
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/"><b>Mood Form</b></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/dashboard">Dashboard</Link>
                            </li>
                        </ul>
                    }
                    {
                        props.active==="dashboard" &&
                        <Fragment>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">Mood Form</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/dashboard"><b>Dashboard</b></Link>
                                </li>
                            </ul>
                            <form className="d-flex me-3">
                                <input className="form-control me-2" type="search" placeholder="Search by hashtag" aria-label="Search" onChange={(e)=>(fill(e))}></input>
                            </form>
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown">
                                    <a className="nav-link active dropdown-toggle" href="/dashboard" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Sort by </a>
                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                        <li><Link className="dropdown-item" to="/dashboard" onClick={()=>(props.bestMoodFirst())}>Best mood first</Link></li>
                                        <li><Link className="dropdown-item" to="/dashboard" onClick={()=>(props.worstMoodFirst())}>Worst mood first</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </Fragment>
                    }
                    </div>
                </div>
            </nav>
        </Fragment>
    );
}

export default NavBar;
