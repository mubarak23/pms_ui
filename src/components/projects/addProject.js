import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

class AddProject extends React.Component{
    constructor(props){
        //bind the state 
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeAssignStudent = this.onChangeAssign_Supervisor.bind(this);
        this.onChangeAssign_Supervisor = this.onChangeAssign_Supervisor.bind(this);
        super(props);
        this.state = {
            title:'',
            description: '',
            assign_student:'',
            assign_supervisor: '',
        }
    }

    onChangeTitle = (e) =>{
        this.setState({
            title:title
        });
    }

    onChangeDescription = (e) =>{
        this.setState({
            description: description
        });
    }

    onChangeAssignStudent = (e) =>{
        this.setState({
            assign_student: assign_student
        });
    }

    onChangeAssign_Supervisor = (e) =>{
        this.setState({
            assign_supervisor: assign_supervisor
        });
    }
    onSubmit = (e) =>{
        e.preventDefault();
        const project = {
            title: this.state.title,
            description: this.state.description,
            assign_student: this.state.assign_student,
            assign_supervisor: this.state.assign_supervisor
        };
        console.log(project);
    }

    render(){
        return(
            <div>
                Component that us add a project
            </div>
        )
    }
}

export default AddProject;