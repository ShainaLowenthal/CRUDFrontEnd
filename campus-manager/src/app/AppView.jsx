import React from 'react';
import './App.css';

const AppView = (props) => {
  const { currentStudent, firstName, lastName , email, gpa, campus } = props;
  return (
    <div className="App">
      <header className="App-header">
        <p>{`${currentStudent.firstName || ""}`}</p>
        <p>{`${currentStudent.lastName || ""}`}</p>
        <p>{`${currentStudent.gpa || ""}`}</p>
        <p>{`${currentStudent.firstName || ""}`}</p>
        <p>{`${currentStudent.campus || ""}`}</p>
      </header>
    </div>
  );
};

export default AppView;