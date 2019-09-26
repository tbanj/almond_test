import React from 'react';
import { Link } from 'react-router-dom'
const NavBar = ({bgColor}) => {
    console.log(bgColor);
    
    return ( 
        <React.Fragment>
            <nav className={`navbar navbar-expand-lg navbar-light  ${bgColor ? bgColor : ''}`}>
            <Link className={`navbar-brand ${bgColor? 'text-light': 'text-teal'}`} to="/">Sample</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item ">
                    <Link className="nav-link" to="#">How it works <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="#">Developer</Link>
                </li>
                <li className="nav-item ">
                    <Link to="/signin" className="nav-link" >Sign In</Link>
                </li>
                <li className="nav-item">
                    <Link to="/signup" className={`nav-link rounded-sm  btn-teal btn-small ${bgColor? 'brd' : ''}`}>Sign Up</Link>
                </li>
                </ul>
            </div>
            </nav>
        </React.Fragment>
    );
}
export default NavBar;