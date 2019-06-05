import React, {Component} from 'react';
import './App.css';
import PropTypes from 'prop-types';
import Student from '../src/Components/Student';
import Campus from '../src/Components/Campus';
import CampusForm from '../src/Components/campusForm.js';

const student = {
  imageSrc: 'img/src',
  name: 'Bob The Builder',
  email: 'student@successfulCampus.org',
  gpa: 4.0,
  Campus: 'Hunter'

};





class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="title">Homepage</h1>
         <Student className="stud"></Student>
         <CampusForm className="campForm"></CampusForm>
         <Campus className="camp" name="Hunter" address="68th Street" description="akjhf" students="Shaina,Shania,blah"></Campus>
      </div>
    );
  }
}

export default App;
