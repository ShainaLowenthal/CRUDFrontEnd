import React, {Component} from 'react';
import './App.css';



import PropTypes from 'prop-types';

import Student from '.../src/components/Student';
import Campus from '.../src/components/Campus';

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
        <h1>ravenous</h1>
         <Student></Student>
         <Campus></Campus>
      </div>
    );
  }
}

export default App;
