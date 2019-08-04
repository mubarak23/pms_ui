import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from './sidebar';



class MainApp extends React.Component{
    constructor(props){
        super(props);
    }
        

    render(){
        return(
           
               <div className="container">
                <SideBar/>
                <h2>This is the main App</h2>
               </div>
          
        )
    }
}

export default MainApp;