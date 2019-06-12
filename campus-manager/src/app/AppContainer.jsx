import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStudentThunk } from '../thunks';
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
    this.state = {
      data: []
    }
  }

  componentDidMount(){
    // console.log('Before', this.props)
    this.props.fetchStudent();
    this.props.fetchCampus();//does it make sense to have both?
    // console.log('After', this.props)
  }

  render() {
    console.log('Render', this.props)
    const {selectedStudent} = this.props
    const {selectedCampus} = this.props
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Home}/>
          <Route exact path="/students" component={AllStudents}/>
          <Route exact path="/campuses" component={AllCampuses}/>
          <p>{selectedStudent && selectedStudent.map(res => {
            return <div>{res.firstName}</div>
          })}</p>
        </div>
      </BrowserRouter>
    )
  }
};

// Map state to props; [required special function]
function mapStateToProps(state) {
  console.log(state)
  return {
    selectedStudent: state.currentStudent;
    selectedCampus: state.currentCampus;
  }
}

// Map dispatch to props;
function mapDispatch(dispatch) {
  return {
    fetchStudent: () => dispatch(fetchStudentThunk());
    fetchCampus: () => dispatch(fetchCampusThunk());
  }
}

  
// export defaconnectult AppContainer;
export default connect(mapStateToProps,mapDispatch)(AppContainer);