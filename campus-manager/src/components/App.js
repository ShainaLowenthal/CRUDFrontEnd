import React, {Component} from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';
import Campus from './campus'

function App() {
  return (
    <div className="App">
    <Campus name="Name" image=" " address="address" description="description"/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
