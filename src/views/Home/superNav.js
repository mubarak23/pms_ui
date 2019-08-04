import React from 'react';
import { Link } from 'react-router-dom';

function MainNavbar (){
    return(
        <div>
            
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/home" className="navbar-brand">PMS</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li></li>
                        <li className="navbar-item">
                            <Link to="/meetings" className="navbar-link">Components</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/home" className="navbar-link">Dashboard</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/createxercise" className="navbar-link">Request Demo</Link>
                        </li>
                        <li></li>
                        <li className="navbar-item">
                            <Link to="/createuser" className="navbar-link">Contact Us</Link>
                        </li>
                    </ul>
                </div>
                </nav>
        </div>
    )
}

export default MainNavbar;