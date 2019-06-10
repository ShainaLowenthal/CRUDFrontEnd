import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
s2.email = "Smith290@gmail.com";
s2.gpa = "1";
s2.campus = "School for the Unintelligent";

const s3 = new Student();
s3.firstName = "Jason"; 
s3.lastName = "DiLarentis";
s3.email = "Jason8780@gmail.com";
s3.gpa = "4";
s3.campus = "Queens College";

const students = [s1, s2, s3];


class AllStudents extends Component(){
  constructor(){
    super();
  }

  // Clicking on a student from the all-students 
  // view should navigate to show that student in 
  // the single-student view
  showStudent = () => {
   // Link to student id page
  }

  render() {
    return(
      <div>
        <Link to="/">Home</Link>
        <div onClick={this.showStudent}>
        {
          students && students.map(obj => {
            return (
              <div> 
                <Student name = {obj.name} />
                {/* <Link to="/students" + {obj.id}>Click Student</Link>  */}
            </div> );
          })
        } 
        </div>
      </div>
    );
  }
}

export default AllStudents;