import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import logo from './logo.svg';
//import Navbar from './Navbar/Navbar';
import './App.css';
//import Header from './Header';
//import Sidebar from './Sidebar'
import Home from './views/Home/Home';
import Meetings from './components/meetings/meetings'
import AddMeeting from './components/meetings/addMeeting';
import Projects from './components/projects/projects';
import AddProject from './components/projects/addProject';
import AddUser from './components/users/addUser';
import MainApp from './components/MainApp/mainApp';
//import Home from './views/Home/Home';

function App() {
  return (
    <div>
    <Router>
    <Route path="/" exact component={Home}/>
      <Route path="/home" exact component={MainApp}/>
                <Route path="/meetings" exact component={Meetings}/>
                <Route path="/addmeeting" exact component={AddMeeting}/>
                <Route path="/projects" exact component={Projects}/>
                <Route path="/addproject" exact component={AddProject}/>
                <Route path="/adduser" exact component ={AddUser}/>
    </Router>
    </div>
  );
}

export default App;
