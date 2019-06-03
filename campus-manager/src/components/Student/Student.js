import React { Component } from 'react';

class Student extends Component{
  constructor(props){
  	super(props)
  }

  render() {
    return (
    	)

  this.propTypes = {
  	id: PropTypes.string.isRequired,
  	fullName: PropTypes.string.isRequired,
  	email: PropTypes.string.isRequired,
  	image: PropTypes.string.isRequired,
  	gpa: PropTypes.number.isRequired,
  	campus: PropTypes.string.isRequired,
  }
};


ContactCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  mobileNumber: PropTypes.number.isRequired,
  workPhone: PropTypes.number,
  email: PropTypes.string.isRequired,
};

export default student;