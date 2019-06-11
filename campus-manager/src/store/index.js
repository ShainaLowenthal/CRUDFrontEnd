import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

import * as reducers from '../reducers';

// Construct Redux Store;
const rootReducer = combineReducers(reducers);
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store; 