import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../../../src/views/Home/superNav";

class AddMeeting extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            date: '',
            time: '',
            location: '',
            with_student: '',
            created_by: ''
        }
    };

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
                Component that allow us to create schedule meeting our supervisor
            </div>
        )
    }
}

export default AddMeeting;