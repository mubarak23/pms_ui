import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

function MainNavbar (){
    return(
        <div>
            
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">PMS</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="navbar-item">
                            <Link to="/home" className="navbar-link">Dashboard</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/adduser" className="navbar-link">Add User</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/addproject" className="navbar-link">Add Project</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/addmeeting" className="navbar-link">Request Meeting</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/projects" className="navbar-link">View Project</Link>
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