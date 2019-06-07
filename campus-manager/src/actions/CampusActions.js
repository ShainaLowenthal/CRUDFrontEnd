import axios form 'axios'

//action types
const GET_CAMPUS ="GET_CAMPUS";
const DELETE_CAMPUS = "DELETE_CAMPUS";
const EDIT_CAMPUS ="EDIT_CAMPUS";
const ADD_CAMPUS = "ADD_CAMPUS";

//action creators 
const getCampus = (campus) =>
{
    return {
        type:GET_CAMPUS,
        payload: campus
    }
}

const deleteCampus = () =>
{
    return {
        type: DELETE_CAMPUS
    }
}

//thunk creators
export const getCampusThunk=(id, name, image, address, description)=(dispatch)=>
{
    return axios
    .get()
    .then(res => res.data)
    .then(allCampuses => dispatch(getCampus(allCampuses)))
    .catch(err=>console.log(err));
}

export const deleteCampusThunk =()=>(dispatch)=>
{
    return dispatch(deleteCampus());
}


//reducer:
export default (state = {}, action) => {
    switch(action.type){
        case GET_CAMPUS:
            return action.payload;
        case DELETE_CAMPUS:
            return {};
        default:
            return state;
    }
}

