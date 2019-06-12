import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllStudentsThunk } from '../thunks';
import {  Link, BrowserRouter, Route } from 'react-router-dom';
import StudentForm from './StudentForm';
import Student from './Student';

class AllStudents extends Component{
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllStudents()
  }

  // STILL NEEDED: Clicking on a student from the all-students 
  // view should navigate to show that student in 
  // the single-student view
 
  render() {
    console.log('All Students Render', this.props)
    const {selectedStudent} = this.props

    return(
      <div>
        <h1 className="title"> All Students </h1>
        <div className="navBar">
          <Link to="/">Home</Link>
        </div>
        {/* Add new student via POST request */}
        {/* Map over All Students Received from the database */}
        <p>
          {selectedStudent && selectedStudent.map(res => {
            return (
              <div className="studentListComponent" href="/"> 
                <div className="studentName"><strong>{res.firstName} {res.lastName}</strong></div> 
                {/* <div className="studentCampus">{res.campus} </div>          */}
              </div>);
          })}
        </p>
        <StudentForm />
      </div>
    )
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
    fetchAllStudents: () => dispatch(fetchAllStudentsThunk())
  }
}

export default connect(mapStateToProps, mapDispatch)(AllStudents);