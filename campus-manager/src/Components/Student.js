import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStudentThunk } from '../thunks';
import { Link } from 'react-router-dom';

class Student extends Component{
  constructor(props){
  	super(props)
    this.state = {
      hasCampus: false
    }
  }

  componentDidMount() {
    this.props.fetchStudent()
  }

  render() {
    console.log('Student Render', this.props)
    const {thisStudent} = this.props

    return (
      <div id={this.props.id} className = "studentContainer">

        <div className="innerStudent">
          <h3>Student</h3>
          <div>Name: {this.props.firstName} {this.props.lastName} </div>
      		<div>Email: {this.props.email} </div>
      		<div>GPA: {this.props.gpa} </div>
          <div>Campus: {(this.props.campus === undefined) ? "This student does not currently belong to a campus." : this.props.campus} </div>

    	    <img src={this.props.imgSrc} />
        </div>
      </div>
    );
  }
};

// Map state to props; [required special function]
function mapStateToProps(state) {
  return {
    selectedStudent: state.currentStudent
  }
}

// Map dispatch to props;
function mapDispatch(dispatch) {
  return {
    fetchStudent: () => dispatch(fetchStudentThunk())
  }
}

export default connect(mapStateToProps, mapDispatch)(Student);