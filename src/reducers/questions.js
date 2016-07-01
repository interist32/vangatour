import {browserHistory} from 'react-router';
import 'whatwg-fetch';

export default function questions(state = {}, action) {
  var newState;
  console.log(action);
  switch(action.type){
    case "ANSWER_QUESTION":
    newState = Object.assign({}, state);
    newState.answers[action.questionId] = action.answerId;
    return newState;

    case "IS_FETCHING":
    return Object.assign({}, state, {isFetching: true});
    case "IS_NOT_FETCHING":
    return Object.assign({},state, {isFetching: false});
    case "SHOW_RESULTS":
      return Object.assign({},state, {results: action.results});

    case "@@router/LOCATION_CHANGE":

    var data = new FormData();
    data.append( "json", JSON.stringify({
      url: action.payload.pathname
    }));

    fetch('/log', {
      method: 'POST',
      body: data,
      credentials: 'same-origin'
    });
      return state;
    default:
    return state;
  }
  return state;
};
