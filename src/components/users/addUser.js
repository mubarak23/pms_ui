import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from '../../../src/views/Home/superNav';

class Adduser extends React.Component{
    constructor(props){
        super(props);

        //binding
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeAssign_to = this.onChangeAssign_to.bind(this);
        this.onChangeReg_no = this.onChangeReg_no.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            password: '',
            email: '',
            assign_to: '',
            reg_no: '',
            status: ''
        }
    }

    onChangeUsername = (e) =>{
        this.setState({
            username: e.target.value
        });
    }

    onChangePassword = (e) =>{
        this.setState({
            password: e.target.value
        });
    }
    onChangeEmail = (e) =>{
        this.setState({
            email: e.target.value
        });
    }

    onChangeAssign_to = (e) =>{
        this.setState({
            email: e.target.value
        });
    }

    onChangeReg_no = (e) =>{
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
                <div className="container">
                <h3>Create Exercise</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                       <label>UserName</label>
                       <input type="text" 
                        required
                        className="form-control"
                        value={this.state.username}
                        onChange = {this.onChangeUsername} />
                    </div>
                    <div className="form-group">
                       <label>Password</label>
                        <input type="password" 
                        required
                        className="form-control"
                        value={this.state.password}
                        onChange = {this.onChangePassword} />   
                    </div>
                    <div className="form-group">
                       <label>Email Address</label>
                        <input type="text" 
                        required
                        className="form-control"
                        value={this.state.email}
                        onChange = {this.onChangeEmail} />   
                    </div>
                    <div className="form-group">
                       <label>Assgn To</label>
                       <input type="text" 
                        required
                        className="form-control"
                        value={this.state.assign_to}
                        onChange = {this.onChangeAssign_to} />   
                    </div>
                    <div className="form-group">
                       <label>Registration Number</label>
                       <input type="text" 
                        required
                        className="form-control"
                        value={this.state.reg_no}
                        onChange = {this.onChangeReg_no} />   
                    </div>
                    <div className="form-group">
                        <input type="submit" 
                        required
                        className="btn btn-primary"
                        value="Create User"
                         />   
                    </div>
                </form>
                </div>
            </div>
        )
    }
}

export default Adduser;