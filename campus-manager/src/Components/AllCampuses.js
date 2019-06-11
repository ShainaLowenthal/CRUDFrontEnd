//display all the campuses in the database
//option to add a new campus
//if none then print a message
import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { fetchCampusThunk } from '../thunks';
import CampusForm from './campusForm';
import Campus from './Campus'

import { connect } from 'react-redux';


class AllCampuses extends Component{
    componentDidMount (){
    this.props.fetchCampus()
  }
  render () {
    return(
      <div>
        <h1>List of All Campuses</h1>
        <div><Link to="/"> Home </Link></div>
        <p>
        <button onClick={CampusForm}> Add New Campus </button>
        </p>

        <Campus />
        <CampusForm />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedCampus: state.currentCampus //***make sure to change that! */
  }
}

// Map dispatch to props;
function mapDispatch(dispatch) {
  return {
    fetchCampus: () => dispatch(fetchCampusThunk())
  }
}


export default connect(mapStateToProps, mapDispatch)(AllCampuses);
