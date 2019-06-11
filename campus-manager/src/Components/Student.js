import React, { Component } from 'react';
import PropTypes from 'prop-types';
import  styles from './Student.css';

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
          <h3>Student</h3>
          <div>Full Name: {this.props.firstName} {this.props.lastName} </div>
      		<div>Email: {this.props.email} </div>
      		<div>GPA: {this.props.gpa} </div>
          <div>Campus: {(this.props.campus === undefined) ? 
            "This student does not currently belong to a campus." : this.props.campus} </div>
    	    <img src={this.props.imageSrc} />
        </div>
      </div>
    );
  }
};

export default Student;