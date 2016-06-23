export function answerQuestion(questionId, answerId){
  console.log(1);
  return {
    type: 'ANSWER_QUESTION',
    questionId,
    answerId
  }
};
