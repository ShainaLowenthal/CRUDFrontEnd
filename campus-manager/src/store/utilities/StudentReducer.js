import axios from 'axios';

// ACTION TYPES;
const FETCH_STUDENT = "FETCH_STUDENT";
const REMOVE_STUDENT = "REMOVE_STUDENT";

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

// THUNK CREATORS;
export const fetchStudentThunk = () => (dispatch) => {
  axios
    .get('/api/students')
    .then(res => res.data)
    .then(thisStudent => dispatch(fetchStudent(thisStudent)))
    .catch(err => console.log(err));
}

export const removeStudentThunk = () => (dispatch) => {
  return dispatch(removeStudent());
}

// SINGLE STUDENT REDUCER;
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
