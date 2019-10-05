import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = ({ bgColor, beActive }) => {
    return (
        <React.Fragment>
            <nav className={`navbar navbar-expand-lg navbar-light  ${bgColor ? bgColor : ''}`}>
                <Link className={`navbar-brand ${bgColor ? 'text-light' : 'text-teal'}  ${beActive === '/' ? 'active' : ''} `} to="/">Sample</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item ">
                            <Link className={`nav-link ${beActive === '/' ? 'active' : ''} `} to="/">How it works <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${beActive === '/developer' ? 'active' : ''}`} to="/developer">Developer</Link>
                        </li>
                        <li className="nav-item ">
                            <Link to="/signin" className={`nav-link ${beActive === '/signin' ? 'active' : ''}`} >Sign In</Link>
                        </li>
                        <li className="nav-item adjustSignupMobile">
                            <Link to="/signup" id="adjustButtonPad" className={`nav-link rounded-sm  btn-teal btn-small ${beActive === '/signup' ? 'active' : ''} ${bgColor ? `brd ` : ''} `}> Sign Up</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </React.Fragment>
    );
}

export default Navbar;