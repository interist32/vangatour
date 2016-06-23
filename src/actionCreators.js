export function answerQuestion(questionId, answerId){
  return {
    type: 'ANSWER_QUESTION',
    questionId,
    answerId
  }
};

export function fetchResults(answers){
  return dispatch => {
    dispatch(showFetching());
    fetch('/getOffers').then((response) => {
      dispatch(hideFetching());
      if(response.status == 200){
        dispatch(showResults([]));
      }
    });
  }
};

export function showFetching(){
  return {
    type: 'IS_FETCHING'
  }
}

export function hideFetching(){
  return {
    type: 'IS_NOT_FETCHING'
  }
}

export function showResults(results){
  return {
    type: 'SHOW_RESULTS',
    results
  }
}
