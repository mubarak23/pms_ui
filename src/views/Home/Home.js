import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Jumbotron, Button} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css'
//import NavbarComponent from './NavbarComponent';
import MainNavbar from './superNav';
//import MainApp from '../../components/MainApp/mainApp';


function Home(){
    return(
      <div>
            <MainNavbar />
            <div>
            <Jumbotron>
        <h1>Welcome!</h1>
        <p>This app demonstrates how to add authentication to a React app. More specifically, it covers how to:</p>
        <ul>
          <li>Add a login/signup area which returns a <a href="https://jwt.io/introduction">JSON Web Token</a> that is saved in <code>localStorage</code></li>
          <li>Given the difficulty associated with tracking student project on campus,
             I was challenge to build a single page application that allow student and 
             supervisors interact and track project progress, the system is built with node/express.js 
            at the backend and react.js at the front end. <code>onEnter</code> route event</li>
        </ul>
       
            <Button ClassName="btn btn-primary" bsSize="large">Log In</Button>
         
      
          <Button ClassName="btn btn-primary" bsSize="large" >Log Out</Button>          
        
      </Jumbotron>
        </div>
      </div>
       
    )
}

export default Home;
