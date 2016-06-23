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
    console.log(Object.assign({}, state, {isFetching: true}));
      return Object.assign({}, state, {isFetching: true});
    case "IS_NOT_FETCHING":
      return Object.assign({},state, {isFetching: false});

    default:
    return state;
  }
  return state;
};
