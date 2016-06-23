import {createStore, applyMiddleware, compose} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';
import thunk from 'redux-thunk';

import rootReducer from './reducers/index';

import questions from './data/questions';

const defaultState = {
  questions: {
    list: questions,
    currentQuestion: null,
    currentQuestionNumber: -1,
    answers: {},
    isFetching: false,
    results: []
  }
};

const store = createStore(rootReducer, defaultState, applyMiddleware(thunk));

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
