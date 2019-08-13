import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from '../../../src/views/Home/superNav';

class Adduser extends React.Component{
    constructor(props){
        super(props);

        //binding
        this.onchangeUsername = this.onchangeUsername.bind(this);
        this.onchangePassword = this.onchangePassword.bind(this);
        this.onchangeEmail = this.onchangeEmail.bind(this);
        this.onchageAssign_to = this.onchageAssign_to.bind(this);
        this.onchangeReg_no = this.onchangeReg_no.bind(this);

        this.state = {
            username: '',
            password: '',
            email: '',
            assign_to: '',
            reg_no: '',
            status: ''
        }
    }

    onchangeUsername = (e) =>{
        this.setState({
            username: e.target.value
        });
    }

    onchangePassword = (e) =>{
        this.setState({
            password: e.target.value
        });
    }
    onchangeEmail = (e) =>{
        this.setState({
            email: e.target.value
        });
    }

    onchageAssign_to = (e) =>{
        this.setState({
            email: e.target.value
        });
    }

    onchangeReg_no = (e) =>{
        this.setState({
            reg_no: e.target.value
        });
    } 

    onSubmit = (e) =>{
        e.preventDefault();
        const addUser = {
            username: this.state.username,
            password: this.state.password,
            email: this.state.email,
            reg_no: this.state.reg_no,
            assign_to: this.state.assign_to
        };

        console.log(addUser);
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