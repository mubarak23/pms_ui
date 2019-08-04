import React from 'react';
import { Link } from 'react-router-dom';
//import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

class Sidebar extends React.Component{
    constructor(props){
        super(props); 
    };
    

    render(){
        return(
            <div>
                <div className="bg-light border-right" id="sidebar-wrapper">
                <div className="sidebar-heading">
                    <Link to="/" className="navbar-brand">PMS</Link> 
                    </div>
                <div className="list-group list-group-flush">
                <Link to="/" className="list-group-item list-group-item-action bg-light">
                    Project Deatail</Link>
                <Link to="/meetings" className="list-group-item list-group-item-action bg-light">
                Checkout Meetings</Link> 
                <Link to="/addmeeting" className="list-group-item list-group-item-action bg-light">
                Request Meeting</Link> 
                <Link to="/projects" className="list-group-item list-group-item-action bg-light">
                Project Docs</Link>
                <Link to="/addproject" className="list-group-item list-group-item-action bg-light">
                Add Project</Link> 
                <Link to="/" className="list-group-item list-group-item-action bg-light">
                Project Status</Link>    
                </div>
            </div>
            </div>
        )
    }
}

export default Sidebar;