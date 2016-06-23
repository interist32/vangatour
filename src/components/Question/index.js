import * as React from 'react';
import Card from '../Card';
import {browserHistory} from 'react-router';
import 'style!./style.css'

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
    const variants = question.variants.map(variant => <Card onClick={this.onAnswer.bind(this, question.id, variant.id)} key={variant.id} caption={variant.caption} image={variant.image}/>);
    const cardWrapperClass = question.id == 1 ? 'card-wrapper-float' : 'card-wrapper-flex';

    return (<div>
      <div className="title">{question.title}</div>
      <div className={cardWrapperClass}>{variants}</div>
      </div>);
    }
  }

  export default Question;
