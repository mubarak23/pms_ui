import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from '../../../src/views/Home/superNav';

class Adduser extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
               <Navbar/> 
                Component that us add user to the system
            </div>
        )
    }
}

export default Adduser;