import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Student.css'

class Student extends Component{
  constructor(props){
  	super(props)
    this.state = {
      hasCampus: false
    }
  }

  render() {
    return (
      <div id={this.props.id}>
        <div className="innerStudent">
          <h1>Student</h1>
          <img src={this.props.imageSrc} />
          <div>Full Name: {this.props.firstName} {this.props.lastName} </div>
      		<div>Email: {this.props.email} </div>
      		<div>GPA: {this.props.gpa} </div>
          <div>Campus: {!this.props.hasCampus ? 
            "This student does not have a campus." : this.props.campus} </div>
    	  </div>
      </div>
    );
  }
};

Student.propTypes = {
  	id: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
  	lastName: PropTypes.string.isRequired,    
  	email: PropTypes.string.isRequired,
  	imageSrc: PropTypes.string,
  	gpa: PropTypes.number.isRequired,
  	campus: PropTypes.string,
    hasCampus: PropTypes.bool
 };

export default Student;