import React from 'react';
import { Link } from 'react-router-dom';
const NotFound = () => {
    return (
        <div className="container">
            <h2> Error encounter, Page Not found kindly  click the link below</h2>
            <div><Link to="/">Go back Home</Link></div>
        </div>
    );
}

export default NotFound;