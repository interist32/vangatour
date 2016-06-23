import {browserHistory} from 'react-router';

export default function questions(state = {}, action) {
  var newState;

  switch(action.type){
    case "ANSWER_QUESTION":
    let answers = [{
      questionId: action.questionId,
      answerId: action.answerId
    }];

    newState = Object.assign({}, state);
    newState.answers = newState.answers.concat(answers);
    return newState;

    case "IS_FETCHING":
    return Object.assign({}, state, {isFetching: true});
    case "IS_NOT_FETCHING":
    return Object.assign({},state, {isFetching: false});
    case "SHOW_RESULTS":
      return Object.assign({},state, {results: action.results});
    default:
    return state;
  }
  return state;
};
