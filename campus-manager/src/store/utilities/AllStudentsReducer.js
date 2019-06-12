import axios from 'axios';

// ACTION TYPES;
const FETCH_ALL_STUDENTS = "FETCH_ALL_STUDENTS";
const REMOVE_ALL_STUDENTS = "REMOVE_ALL_STUDENTS";
const ADD_STUDENT = "ADD_STUDENT";

// ACTION CREATORS

// FETCHES ALL STUDENTS [] FROM EXPRESS SERVER
const fetchAllStudents = (students) => {
  return {
    type: FETCH_ALL_STUDENTS,
    payload: students
  }
}

const removeAllStudents = () => {
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

// THUNK CREATORS;
export const fetchAllStudentsThunk = () => (dispatch) => {
  return axios
    .get('/api/students')    
    .then(res => res.data)
    .then(thisStudent => dispatch(fetchAllStudents(thisStudent)))
    .catch(err => console.log(err));
}

export const removeAllStudentsThunk = () => (dispatch) => {
  return dispatch(removeAllStudents());
}

// REDUCER;
export default (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_STUDENTS:
      return action.payload;
    case REMOVE_ALL_STUDENTS: 
      return [];
    default:
      return state;
  }
}
