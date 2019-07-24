import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

function Sidebar(){
    return (
        <div>
    <div className="bg-light border-right" id="sidebar-wrapper">
      <div className="sidebar-heading">Project MS </div>
      <div className="list-group list-group-flush">
        <a href="#" className="list-group-item list-group-item-action bg-light">Project Deatail</a>
        <a href="#" className="list-group-item list-group-item-action bg-light">Checkout Meetings</a>
        <a href="#" className="list-group-item list-group-item-action bg-light">Request Meeting</a>
        <a href="#" className="list-group-item list-group-item-action bg-light">Project Details</a>
        <a href="#" className="list-group-item list-group-item-action bg-light">Project Docs</a>
        <a href="#" className="list-group-item list-group-item-action bg-light">Status</a>
      </div>
    </div>
        </div>
    )
}

export default Sidebar;