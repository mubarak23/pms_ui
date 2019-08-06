import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from './sidebar';
import NavBar from '../../views/Home/superNav';



class MainApp extends React.Component{
    constructor(props){
        super(props);
    }
        

    render(){
        return(
                <div>
                    <NavBar/>
                    <br/>
                    <div className="container">
                   <div className="row">
                       <div className="col-md-4">
                       <SideBar/>
                       </div>
                       <div className="col-md-8">
                       <h2>This is the main App</h2>
                       </div>
                   </div>
               </div>
                </div>
               
          
        )
    }
}

export default MainApp;