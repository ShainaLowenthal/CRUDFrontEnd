import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import AllStudents from '../Components/AllStudents';
import AllCampuses from '../Components/AllCampus';
import Home from '../Components/Home';

// Smart Container
class AppContainer extends Component {
  constructor() {
    super()
    this.state = {  }
  }

  render() {
    return (
      <BrowserRouter>
          <Route exact path="/" component={Home}/>
          <Route exact path="/students" component={AllStudents}/>
          <Route exact path="/campuses" component={AllCampuses}/>
      </BrowserRouter>
    )
  }
};
  
export default AppContainer;