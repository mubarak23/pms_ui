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
          <li>Conditionally hide and show various parts of the application depending on the user's authentication state</li>
          <li>Create a profile area which displays user information from the payload of the JWT</li>
          <li>Protect client-side routes with the <code>onEnter</code> route event</li>
          <li>Make requests for server resources protected by JWT middleware on the server</li>
          <li>Make requests for server resources that require a specific <code>scope</code> to be present in the JWT payload</li>
        </ul>
       
            <Button ClassName="btn btn-primary" bsSize="large">Log In</Button>
         
      
          <Button ClassName="btn btn-primary" bsSize="large" >Log Out</Button>          
        
      </Jumbotron>
        </div>
      </div>
       
    )
}

export default Home;
