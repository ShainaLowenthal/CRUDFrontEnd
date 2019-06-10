const express = require ("express");
const app = express ();
const parser = require("body-parser");
const morgan = require ("morgan");

import axios from 'axios';

// ACTION TYPES;
const FETCH_STUDENT = "FETCH_STUDENT";
const REMOVE_STUDENT = "REMOVE_STUDENT";
const ADD_STUDENT = "ADD_STUDENT";

// ACTION CREATORS
const fetchStudent = (student) => {
  return {
    type: FETCH_STUDENT,
    payload: student
  }
}

const removeStudent = () => {
  return {
    type: REMOVE_STUDENT
  }
}

// CURRENTLY DOES NOTHING
const addStudent = (lastName, firstName, gpa, email, campus) => {
  return {
    type: ADD_STUDENT
  }
}

// CURRENTLY PULLS FROM WRONG DATABASE
// THUNK CREATORS;
export const fetchStudentThunk = (lastName, firstName) => (dispatch) => {
  return axios
    .get('https://nba-players.herokuapp.com/players-state/$(lastName/$(firstName))')
    .then(res => res.data)
    .then(thisStudent => dispatch(fetchStudent(thisStudent)))
    .catch(err => console.log(err));
}

export const removeStudentThunk = () => (dispatch) => {
  return dispatch(removeStudent());
}

// REDUCER;
export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STUDENT:
      return action.payload;
    case REMOVE_STUDENT: 
      return {};
    default:
      return state;
  }
}
