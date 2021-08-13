import { Fragment } from "react";
import { Link } from "react-router-dom";

const NavBar=({active})=> {
    return(
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><h4>Employee Mood of the Day</h4></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {
                            active==="form" &&
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
                            active==="dashboard" &&
                            <Fragment>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">Mood Form</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/dashboard"><b>Dashboard</b></Link>
                                </li>
                                <li className="nav-item dropdown">
                                <a className="nav-link active dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Sort by
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="/#">Highest rating first</a></li>
                                    <li><a className="dropdown-item" href="/#">Lowest rating first</a></li>
                                    <li><a className="dropdown-item" href="/#">Newest first</a></li>
                                    <li><a className="dropdown-item" href="/#">Oldest first</a></li>
                                </ul>
                                </li>
                            </Fragment>
                        }
                        </ul>
                        {
                            active==="dashboard" &&
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