import 'whatwg-fetch';

export function answerQuestion(questionId, answerId){
  return {
    type: 'ANSWER_QUESTION',
    questionId,
    answerId
  }
};

export function fetchResults(answers){
  var data = new FormData();
  data.append( "json", JSON.stringify(answers));

  return dispatch => {
    dispatch(showFetching());
    fetch('/getOffers', {
      method: 'POST',
      body: data,
      credentials: 'same-origin'
    }).then((response) => {
      dispatch(hideFetching());
      return response.json();
    }).then((data)=>{
      dispatch(showResults(data));
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
