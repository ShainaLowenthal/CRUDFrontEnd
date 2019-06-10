import React from 'react';
import './App.css';
import AllStudents from '../src/Components/AllStudents';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from '../src/Components/Home';
import AllCampuses from '../src/Components/AllCampusCont';

const HomeComponent = () => (
  <Home/> 
);

const AllStudents = () => (
  <AllStudents/>
);

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={HomeComponent}/>
        <Route exact path="/students" component={AllStudents}/>
        <Route exact path="/campuses" component={AllCampuses}/>
      </div>
    </Router>
  );
};

export default App;
