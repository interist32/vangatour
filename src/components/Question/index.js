import * as React from 'react';
import Card from '../Card';
import {browserHistory} from 'react-router';

class Question extends React.Component {
  constructor(){
    super();
  }

  onAnswer(questionId, answerId){
    this.props.answerQuestion(questionId, answerId);

    const nextQuestion = this.props.questions.list.filter(q=>q.id == (parseInt(questionId) + 1))[0];
    const nextStep = nextQuestion ? `/q/${nextQuestion.id}` : '/result';
    browserHistory.push(nextStep);
  }

  render(){
    const question = this.props.questions.list.filter(item => item.id == this.props.params.id)[0];
    const variants = question.variants.map(variant => <Card onClick={this.onAnswer.bind(this, question.id, variant.id)} key={variant.id} caption={variant.caption} url={variant.url}/>);

    return (<div>
      <h2>{question.title}</h2>
      {variants}

      </div>);
    }
  }

  export default Question;
