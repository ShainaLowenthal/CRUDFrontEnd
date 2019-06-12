import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCampusThunk } from '../thunks';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//import Student from '../src/Components/Student';

class Campus extends Component{
  constructor(props){
    super(props);
    this.state = {
    hasStudent: false,
    };
  }

  componentDidMount() {
    this.props.fetchAllStudents()
  }

  handleRemove = event => {
    delete this.state.campus;
  }

  render(){
    console.log('All Campus Render', this.props)
    const {thisCampus} = this.props

    return(
      <div className ="campus">
        <div>Name: {this.props.name}</div>
        {/* <img src={this.props.image}>Image: </img> */}
        <div>Image: {this.props.image}</div>
        <div>Address: {this.props.address}</div>
        <div> Description: {this.props.description}</div>
        <div>  Students on campus: {!this.props.hasStudent ?
        "This campus does not have any students." :this.props.students}</div>

        <button onClick={this.handleremove}>X</button>
        <button>Edit</button>
      </div>
    );
  }
};

// Map state to props; [required special function]
function mapStateToProps(state) {
  return {
    selectedStudent: state.currentStudent
  }
}

// Map dispatch to props;
function mapDispatch(dispatch) {
  return {
    fetchStudent: () => dispatch(fetchStudentThunk())
  }
}

export default Campus;