import {browserHistory} from 'react-router';

export default function questions(state = {}, action) {
  console.log('questions reducer');
  console.log(state);

  switch(action.type){
    case "ANSWER_QUESTION":
    let answers = [{
      questionId: action.questionId,
      answerId: action.answerId
    }];

    let newState = Object.assign({}, state);
    newState.answers = answers;
    return newState;

    default:
    return state;
  }
  return state;
};
