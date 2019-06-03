import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Student extends Component{
  constructor(props){
  	super(props)
  }

  render() {
    return <div id={this.props.id}>
    		<p>Full Name: {this.props.fullName} </p>
    		<p>Email: {this.props.email} </p>
    		<p>ImgSrc: {this.props.imageSrc} </p>
    		<p>GPA: {this.props.gpa} </p>
    		<p>Campus: {this.props.campus} </p>
    	</div>
    	
  }
  
};

Student.propTypes = {
  	id: PropTypes.string.isRequired,
  	fullName: PropTypes.string.isRequired,
  	email: PropTypes.string.isRequired,
  	imageSrc: PropTypes.string.isRequired,
  	gpa: PropTypes.number.isRequired,
  	campus: PropTypes.string.isRequired,
 };

export default Student;