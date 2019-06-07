//display all the campuses in the database
//option to add a new campus
//if none then print a message

//import React, {Component} from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import CampusForm from './campusForm';
import Campus from './SingleCampusCont';

class AllCampus extends Component { //parent of single student with array of students that is rendered over 

        render(){
        return(
        <div>
           {/* <button><Link to="/campusForm" >Add Campus!</Link></button> */}
            <Campus></Campus>
            <CampusForm></CampusForm>
            
            </div>
           
        )
        }
    


}

export default AllCampus;