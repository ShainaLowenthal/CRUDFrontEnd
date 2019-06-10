import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Student from './Student';


class StudentForm extends Component { 
  constructor(props){
    super(props);
    this.state = {
      firstName: this.props.firstName,
      lastName: this.props.lastName,
      email: this.props.email,
      addStudent: false
    };
    this.baseState = this.state
  }
  
  addNewStudent = () => {
    this.setState({addStudent: true});
  }

  cancelForm = () => {
    this.setState(this.baseState);
  }

  saveForm = () => {
    this.setState({firstName: this.state.tempFirst});
    this.setState({lastName: this.state.tempLast});
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  
  handleAdd(){
    return <Student firstName={this.state.firstName} 
    lastName={this.state.lastName} email={this.state.email}/>
  }
     
  render(){ 
    if(this.state.addStudent){
      return (
        <form>
          <div>
            <label>First Name:</label>
            <input type ="text" value = {this.state.tempFirst} 
            placeholder = {this.state.tempFirst} onChange ={this.handleChange}/>

            <label>Last Name:</label>
            <input type ="text" value = {this.state.tempLast} 
            placeholder = {this.state.tempLast} onChange ={this.handleChange}/>

            <label>Email:</label>
            <input type ="text" value  = {this.state.tempEmail} 
            placeholder = {this.state.tempEmail} onChange ={this.handleChange}/>

            <button onClick={this.saveForm}>Save</button>
            <button onClick={this.cancelForm}>Cancel</button>
          </div>
      </form> );
    }else {
      return (
        <div>
          {/* <button onClick={this.addNewStudent}> Add New Student </button> */}

        </div> );
    }
  }   
};

StudentForm.propTypes = {
  firstName: PropTypes.string,
  tempFirst: PropTypes.string,
  lastName: PropTypes.string, 
  tempLast: PropTypes.string,
  email: PropTypes.string,
  addStudent: PropTypes.bool,
};

export default StudentForm;



