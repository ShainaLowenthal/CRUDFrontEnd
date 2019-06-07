import React, {Component} from 'react';

import {Link} from 'react-router-dom';
import Student from './Student';
import Campus from './SingleCampusCont';
import './Home.css'
class Home extends Component {
  render() {
    return (
        <div>
          <h1>Campus Manager Homepage</h1>

         <div id ="campus"><Link to="/AllCampusCont">All Campuses</Link></div> 
          <div id="student"><Link to="/student">All Students</Link></div> 
       

         


        </div>
    );
  }
}

export default Home;