import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStudentThunk } from '../thunks';
import { Link } from 'react-router-dom';
import StudentForm from './StudentForm';
import Student from './Student';

class AllStudents extends Component{
  constructor(props) {
    super(props);
    this.state ={

    }
  }
  componentDidMount (){
    this.props.fetchStudent()
  }
  // Clicking on a student from the all-students 
  // view should navigate to show that student in 
  // the single-student view
  // showStudent = () => {
  //  // Link to student id page
  // }
  render() {
    return(
      <div>
        <h1> All Students </h1>
        <Link to="/">Home</Link>

        {/* Add new student via POST request */}
        <button onClick={StudentForm}> Add New Student </button>

        {/* <div onClick={this.showStudent}> */} 
        {/* <div>{
          students && students.map(obj => {
            return (
              <div> 
                <Student firstName = {obj.firstName} 
                          lastName = {obj.lastName}
                          email = {obj.email}
                          gpa = {obj.gpa}
                          campus = {obj.campus}/>
                <Link to="/students" + {obj.id}>Click Student</Link>
              </div> 
            );
          })

        }</div> */}
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
      fetchStudent: () => dispatch(fetchStudentThunk())
    }
  }


export default connect(mapStateToProps, mapDispatch)(AllStudents);