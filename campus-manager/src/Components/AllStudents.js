import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import StudentForm from './StudentForm';
import Student from './Student';

const s1 = new Student();
s1.firstName = "Bob"; 
s1.lastName = "Marley";
s1.email = "Marley@gmail.com";
s1.gpa = "3";
s1.campus = "Harvard College";

const s2 = new Student();
s2.firstName = "John"; 
s2.lastName = "Smith";
s2.email = "Smith290@aol.com";
s2.gpa = "1";
s2.campus = "School for the Unintelligent";

const s3 = new Student();
s3.firstName = "Jason"; 
s3.lastName = "DiLarentis";
s3.email = "Jason8780@yahoo.com";
s3.gpa = "4";
s3.campus = "Queens College";

const s4 = new Student();
s4.firstName = "Pooh"; 
s4.lastName = "Bear";
s4.email = "100AcreWoods@woodlands.com";
s4.gpa = "5.0";

const students = [s1, s2, s3, s4];


function AllStudents(){
  // Clicking on a student from the all-students 
  // view should navigate to show that student in 
  // the single-student view
  // showStudent = () => {
  //  // Link to student id page
  // }

  // render() {
    return(
      <div>
        <h1> All Students </h1>
        <Link to="/">Home</Link>

        {/* Add new student via POST request */}
        <button onClick={StudentForm}> Add New Student </button>

        {/* <div onClick={this.showStudent}> */} 
        <div>{
          students && students.map(obj => {
            return (
              <div> 
                <Student firstName = {obj.firstName} 
                          lastName = {obj.lastName}
                          email = {obj.email}
                          gpa = {obj.gpa}
                          campus = {obj.campus}/>
                {/* <Link to="/students" + {obj.id}>Click Student</Link> */}
              </div> 
            );
          })

        }</div>
      </div>
    )
}

export default AllStudents;