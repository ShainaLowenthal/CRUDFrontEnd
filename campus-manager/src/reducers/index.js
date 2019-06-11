// A barrel file for our reducers, which will be combined and passed into the Redux store we create;
// The aliases of reducers in this file will be assigned as the names of the keys in the Redux store;
export { default as currentStudent } from '../store/utilities/AllStudentsReducer';
export { default as currentCampus } from '../store/utilities/AllCampusesReducer';
// export { default as firstName ,lastName , email , gpa , campus } from '../store/utilities/student';
