import React, {Component} from 'react';
import './App.css';

import Student from '../src/Components/Student';
import Campus from '../src/Components/Campus';

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
        <Student imageSrc="img/src" fullName="Bob The Builder" email="student@successfulCampus.org" gpa= "4.0" campus="Hunter" hasCampus="true"/>

      </div>
    );
  }
}

export default App;
