import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from 'react-time-picker'
import Navbar from "../../../src/views/Home/superNav";

class AddMeeting extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            date: '',
            time: '',
            location: '',
            with_student: '',
            created_by: '',
            users: []
        }
    };

    componentDidMount(){
        this.setState({
            users : ['Mubarak Aminu'],
            username : ['Mubarak Aminu'],
        })
    }

    onChangeDate = (e) =>{
        this.setState({
            date: e.target.value
        });
    }
    onChangeTime = () =>{
        this.setState({
            time: e.target.value
        });
    }
    onChangeLocation = (e) =>{
        this.setState({
            location: e.target.value
        });
    }

    onChangeWithStudent = (e) =>{
        this.setState({
            with_student: e.target.value
        });
    }

    onChangeCreateBy = (e) =>{
        this.setState({
            created_by: e.target.value
        });
    }

    onSubmit = (e) =>{
        e.preventDefault();
        const createMeeting = {
            date: this.state.date,
            time: this.state.time,
            location: this.state.location,
            with_student: this.state.with_student,
            created_by: this.state.created_by
        }
        console.log(createMeeting);
    }

    

    render(){
        return(
            <div>
                <Navbar/>
                <div className="container">
                <h3>Create Meeting Schedule</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                       <label>Location</label>
                       <input type="text" 
                        required
                        className="form-control"
                        value={this.state.location}
                        onChange = {this.onChangeLocation} />
                    </div>
                    <div className="form-group">
                       <label>Date</label>
                        <div>
                        <DatePicker 
                        selected={this.state.date}
                        onChange={this.onChangeDate}/>
                        </div>   
                    </div>
                    
                    <div className="form-group">
                       <label>Date</label>
                        <div>
                        <TimePicker 
                        selected={this.state.time}
                        onChange={this.onChangeTime}/>
                        </div> 
                    </div>
                    <div className="form-group">
                    <label>UserName</label>
                       <select ref="userInput"
                       required
                       className="form-control"
                       value={this.state.with_student}
                       onChange ={this.onChangeWithStudent}>
                           {
                               this.state.users.map(function(user){
                                   return <option key={user}
                                   value={user}>{user}    
                                   </option>;
                               })
                           }
                       </select> 
                    </div>
                    <div className="form-group">
                        <input type="submit" 
                        required
                        className="btn btn-primary"
                        value="Create Meeting Schedule"
                         />   
                    </div>
                </form>
                </div>
            </div>
        )
    }
}

export default AddMeeting;