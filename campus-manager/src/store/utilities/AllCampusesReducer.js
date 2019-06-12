import axios from 'axios';

// ACTION TYPES;
const FETCH_ALL_CAMPUSES = "FETCH_ALL_CAMPUSES";
const REMOVE_ALL_CAMPUSES = "REMOVE_ALL_CAMPUSES";
const ADD_CAMPUS = "ADD_CAMPUS";

// ACTION CREATORS
const fetchAllCampuses = (campuses) => {
  return {
    type: FETCH_ALL_CAMPUSES,
    payload: campuses
  }
}

const removeAllCampuses = () => {
  return {
    type: REMOVE_ALL_CAMPUSES
  }
}

// CURRENTLY DOES NOTHING
const addCampus = (campus) => {
  return {
    type: ADD_CAMPUS,
    payload: campus
  }
}

// CURRENTLY PULLS FROM WRONG DATABASE
// THUNK CREATORS;
export const fetchAllCampusesThunk = () => (dispatch) => {
  return axios
    .get('/api/campuses')
    .then(res => res.data)
    .then(thisCampus => dispatch(fetchAllCampuses(thisCampus)))
    .catch(err => console.log(err));
}

export const removeAllCampusesThunk = () => (dispatch) => {
  return dispatch(removeAllCampuses());
}

// REDUCER;
export default (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_CAMPUSES:
      return action.payload;
    case REMOVE_ALL_CAMPUSES: 
      return {};
    default:
      return state;
  }
}
