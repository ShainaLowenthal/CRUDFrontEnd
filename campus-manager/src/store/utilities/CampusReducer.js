import axios from 'axios';

// ACTION TYPES;
const FETCH_CAMPUS = "FETCH_CAMPUS";
const REMOVE_CAMPUS = "REMOVE_CAMPUS";

// ACTION CREATORS
const fetchCampus = (campus) => {
  return {
    type: FETCH_CAMPUS,
    payload: campus
  }
}

const removeCampus = () => {
  return {
    type: REMOVE_CAMPUS
  }
}


// THUNK CREATORS;
export const fetchCampusThunk = () => (dispatch) => {
  axios
    .get('/api/campus')           //import backend?? 
    .then(res => res.data)
    .then(thisCampus => dispatch(fetchCampus(thisCampus)))
    .catch(err => console.log(err));
}

export const removeCampusThunk = () => (dispatch) => {
  return dispatch(removeCampus());
}

// SINGLE CAMPUS REDUCER;
export default (state = [], action) => {
  switch (action.type) {
    case FETCH_CAMPUS:
      return action.payload;
    case REMOVE_CAMPUS: 
      return {};
    default:
      return state;
  }
}
