import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import AllStudents from '../Components/AllStudents';
import AllCampuses from '../Components/AllCampuses';
import Home from '../Components/Home';

// Smart Container
class AppContainer extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Home}/>
          <Route exact path="/students" component={AllStudents}/>
          <Route exact path="/campuses" component={AllCampuses}/>
        </div>
      </BrowserRouter>
    )
  }
};

  
export default AppContainer;
