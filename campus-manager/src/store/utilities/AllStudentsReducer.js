// const express = require ("express");
// const app = express ();
// const parser = require("body-parser");
// const morgan = require ("morgan");

import axios from 'axios';

// ACTION TYPES;
const FETCH_ALL_STUDENTS = "FETCH_ALL_STUDENTS";
const REMOVE_ALL_STUDENTS = "REMOVE_ALL_STUDENTS";
const ADD_STUDENT = "ADD_STUDENT";

// ACTION CREATORS
const fetchStudent = (student) => {
  return {
    type: FETCH_ALL_STUDENTS,
    payload: student
  }
}

const removeStudent = () => {
  return {
    type: REMOVE_ALL_STUDENTS
  }
}

// CURRENTLY DOES NOTHING
const addStudent = (student) => {
  return {
    type: ADD_STUDENT,
    payload: student
  }
}

// CURRENTLY PULLS FROM WRONG DATABASE
// THUNK CREATORS;
export const fetchStudentThunk = () => (dispatch) => {
  return axios
    .get('/api/students')    
    .then(res => res.data)
    .then(thisStudent => dispatch(fetchStudent(thisStudent)))
    .catch(err => console.log(err));
}

export const removeStudentThunk = () => (dispatch) => {
  return dispatch(removeStudent());
}

// REDUCER;
export default (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_STUDENTS:
      return action.payload;
    case REMOVE_ALL_STUDENTS: 
      return {};
    default:
      return state;
  }
}
