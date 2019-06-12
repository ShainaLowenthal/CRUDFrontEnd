//display all the campuses in the database
//option to add a new campus
//if none then print a message
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllCampusesThunk } from '../thunks';
import { Link } from 'react-router-dom';
import CampusForm from './CampusForm';
import Campus from './Campus';

class AllCampus extends Component{
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllCampuses()
  }

  render () {
    console.log('All Campuses Render', this.props)
    const {selectedCampus} = this.props

    return(
      <div>
        <h1 className = "title">All Campuses</h1>
        <div  className = "navBar">
          <Link to="/"> Home </Link>
        </div>

        {/* Map over All Campuses Received from the database */}
        <p>
          {selectedCampus && selectedCampus.map(res => {
            return (
              <div className="studentListComponent" href="/"> 
                <div className="studentName"><strong>{res.name}</strong></div> 
                <div className="studentCampus">{res.address} </div>
              </div>);
          })}
        </p>
        <CampusForm />
      </div>
    );
  }
};

// Map state to props; [required special function]
function mapStateToProps(state) {
  return {
    selectedCampus: state.currentCampus
  }
}

// Map dispatch to props;
function mapDispatch(dispatch) {
  return {
    fetchAllCampuses: () => dispatch(fetchAllCampusesThunk())
  }
}

export default connect(mapStateToProps, mapDispatch)(AllCampus);