import React, { Component } from 'react';
import { fetchStudentThunk, removeStudentThunk } from '../thunks';
import './App.css';
import AllStudents from '../src/Components/AllStudents';
import AllCampuses from '../src/Components/AllCampusCont';
import Home from '../src/Components/Home';

//=============================================
const express = require("express");
const app = express();
const apiRouter = require("../api");

app.use("/api", apiRouter);

app.listen(3000, () => {
  console.log("Inside App listen api Router");
})


// Smart Container
class AppContainer extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomeComponent}/>
          <Route exact path="/students" component={AllStudents}/>
          <Route exact path="/campuses" component={AllCampuses}/>
        </div>
      </Router>
    )
  }
  
  // Map state to props;
  function mapState(state) {
    return {
      currentStudent: state.currentStudent ,
      firstName: state.firstName,
      lastName: state.lastName,
      gpa: state.gpa,
      campus: state.campus,
      email: state.email
    }
  }

  // Map dispatch to props;
  function mapDispatch(dispatch) {
    return {
      fetchStudent: (lastName, firstName) => dispatch(fetchStudentThunk(lastName, firstName)),
      removeStudent: () => dispatch(removeStudentThunk())
    }
  }

};

export default connect(mapState, mapDispatch)(AppContainer);
