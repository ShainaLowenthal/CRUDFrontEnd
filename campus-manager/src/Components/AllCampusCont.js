//display all the campuses in the database
//option to add a new campus
//if none then print a message
import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import CampusForm from './campusForm';
import Campus from './SingleCampusCont'

class AllCampus extends Component{
  render () {
    return(
      <div>
        <Campus />
        <CampusForm />
        <div><Link to="/"> Home </Link></div>
      </div>
    );
  }
}

export default AllCampus;