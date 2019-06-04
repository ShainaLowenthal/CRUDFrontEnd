import React from 'react';
import './App.css';

import Student from '../Student/Student';
import Campus from '../Campus/Campus';

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
        <Student> <Student/>

      </div>
    );
  }
}

export default App;
