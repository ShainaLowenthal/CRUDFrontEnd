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
    return (<div id={this.props.id}>
        <div class="innerStudent">
          <img src={this.props.imageSrc} />
      		<p><strong>Full Name: </strong>{this.props.fullName} </p>
      		<p><strong>Email: </strong>{this.props.email} </p>
      		<p><strong>GPA: </strong>{this.props.gpa} </p>
          <p><strong>Campus: </strong>{!this.props.hasCampus ? 
            "This student does not have a campus." : this.props.campus} </p>
          

    	  </div>
      </div>)
  }
  
};

Student.propTypes = {
  	id: PropTypes.string.isRequired,
  	fullName: PropTypes.string.isRequired,
  	email: PropTypes.string.isRequired,
  	imageSrc: PropTypes.string,
  	gpa: PropTypes.number.isRequired,
  	campus: PropTypes.string,
    hasCampus: PropTypes.bool
 };

export default Student;