import React, {Component} from 'react';
import './App.css';
import PropTypes from 'prop-types';
import Student from '../src/Components/Student';
import Campus from '../src/Components/SingleCampusCont';
import CampusForm from '../src/Components/campusForm.js';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from '../src/Components/Home';
import AllCampus from '../src/Components/AllCampusCont.js';

const student = {
  imageSrc: 'img/src',
  name: 'Bob The Builder',
  email: 'student@successfulCampus.org',
  gpa: 4.0,
  Campus: 'Hunter'

};
const campus1 = {
  id: 'campusid',
  imageSrc: 'img/src',
  name: 'Hunter College',
  address: '68th and Lex',
  descrition:'elevators constantly broken...but there are free granola bars!'
};
const campus2 = {
  id: 'campusid',
  imageSrc: 'img/src',
  name: 'Baruch College',
  address: '25th and Lex',
  descrition:'ajfehjw!'
};
const campus3 = {
  id: 'campusid',
  imageSrc: 'img/src',
  name: 'Hunter College',
  address: '68th and Lex',
  descrition:'nadfbdbe!'
};

let campuses =[campus1, campus2,campus3];
 App = () => {
  render() {

     const HomeComponent = () => (<Home/> );
  
    const CampusComponent = () => (
        <Campus Name={this.props.name} address={this.props.address}  />

    );
    const AllCampuses = ()=>(
      <AllCampus {campuses.id} /> 
    const CampForm = () =>(
      <CampusForm Name={this.props.name} address={this.props.address}/>
    )
    return (<Router>
<div>
  <Route exact path="/" render={HomeComponent}/>
  <Route exact path="/Campus" render={CampusComponent}/>
  <Route exact path = "/AllCampusCont" render={AllCampus}/>
  <Route exact path = "/campusForm.js" render={CampusForm}/>
  
</div>
</Router>
    );
  }
}

export default App;
