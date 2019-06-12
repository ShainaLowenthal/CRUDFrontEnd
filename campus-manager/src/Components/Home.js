import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styles from './Home.css';

class Home extends Component {
  render() {
    return (
      <div className = "homeBody">
        <div className = "title">
          <h1><span className = "homeTitleSpan">Campus Manager Homepage</span></h1>
        </div>
        <div className = "navBar">
          <Link to="/campuses">Campuses</Link> 
          <Link to="/students">Students</Link>
        </div>
      </div>
    );
  }
};

export default Home;