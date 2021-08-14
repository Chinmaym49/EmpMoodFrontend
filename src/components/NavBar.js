import { Fragment } from "react";
import { Link } from "react-router-dom";

const NavBar=(props)=> {
    return(
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><b>Employee Mood of the Day</b></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {
                            props.active==="form" &&
                            <Fragment>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/"><b>Mood Form</b></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/dashboard">Dashboard</Link>
                                </li>
                            </Fragment>

                        }
                        {
                            props.active==="dashboard" &&
                            <Fragment>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">Mood Form</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/dashboard"><b>Dashboard</b></Link>
                                </li>
                                <li className="nav-item dropdown">
                                <a className="nav-link active dropdown-toggle" href="/dashboard" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Sort by
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/dashboard" onClick={()=>(props.bestMoodFirst())}>Best mood first</Link></li>
                                    <li><Link className="dropdown-item" to="/dashboard" onClick={()=>(props.worstMoodFirst())}>Worst mood first</Link></li>
                                    <li><Link className="dropdown-item" to="/dashboard">Newest first</Link></li>
                                    <li><Link className="dropdown-item" to="/dashboard">Oldest first</Link></li>
                                </ul>
                                </li>
                            </Fragment>
                        }
                        </ul>
                        {
                            props.active==="dashboard" &&
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search hashtag here" aria-label="Search" required="required"></input>
                                <button className="btn btn-outline-light" type="submit">Search</button>
                            </form>
                        }
                    </div>
                </div>
            </nav>
        </Fragment>
    );
}

export default NavBar;