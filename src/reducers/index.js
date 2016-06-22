import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import questions from './questions';
import appState from './appState';

const rootReducer = combineReducers({
  appState,
  questions,
  routing: routerReducer
});

export default rootReducer;
